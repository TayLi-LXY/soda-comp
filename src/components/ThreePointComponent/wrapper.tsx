'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { message, Modal } from 'antd';
import type { ThreePointComponentWrapperProps } from './types';
import { eventsDataSchemaList } from './actions';
import ThreePointComponentComponent from './index';
import { useDispatch } from 'react-redux';
import {
  listMembers,
  searchCandidates,
  addMember,
  removeMember,
  updateMemberRole,
  PROJECT_ROLES,
  type GroupMember,
  type GroupMemberCandidate,
} from '@/mocks/groupMembers';

/**
 * 组件逻辑: 三点组件 — Agent 成员（双通道搜索计数 / 冲突 / 回读）
 */
const ThreePointComponentWrapper: React.FC<ThreePointComponentWrapperProps> = (props) => {
  const dispatch = useDispatch();
  const { loggedinUser, conversationId, dialogueFileList, dialogueDataSchemaList, previewUrlOfSelectedSchema } = props;

  /** 本会话全量（快照 / 选中 / 改角色 / 移出） */
  const [members, setMembers] = useState<GroupMember[]>([]);
  /** 顶栏搜索后的展示列表（服务端过滤） */
  const [displayedMembers, setDisplayedMembers] = useState<GroupMember[]>([]);
  const [memberFilterQuery, setMemberFilterQuery] = useState('');
  const [memberMatched, setMemberMatched] = useState(0);
  const [memberTotal, setMemberTotal] = useState(0);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [candidates, setCandidates] = useState<GroupMemberCandidate[]>([]);
  const [candidateQuery, setCandidateQuery] = useState('');
  const [candidateSelectedIds, setCandidateSelectedIds] = useState<string[]>([]);
  const [candidateMatched, setCandidateMatched] = useState(0);
  const [candidateTotal, setCandidateTotal] = useState(0);
  const [candidatePoolExhausted, setCandidatePoolExhausted] = useState(false);
  const [serverSnapshotVisible, setServerSnapshotVisible] = useState(false);
  const [roleDraft, setRoleDraft] = useState('');
  const memberSearchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const candidateSearchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const memberFilterQueryRef = useRef(memberFilterQuery);
  memberFilterQueryRef.current = memberFilterQuery;

  const actions = {
    eventsDataSchemaList: useMemo(() => eventsDataSchemaList(dispatch), [dispatch]),
  };

  const projectRoleOptions = useMemo(
    () => PROJECT_ROLES.map((role) => ({ label: role, value: role })),
    [],
  );

  const singleSelectedMember = useMemo(() => {
    if (selectedIds.length !== 1) {
      return undefined;
    }
    return members.find((m) => m.id === selectedIds[0]);
  }, [members, selectedIds]);

  useEffect(() => {
    if (singleSelectedMember) {
      setRoleDraft(singleSelectedMember.projectRole);
    } else {
      setRoleDraft('');
    }
  }, [singleSelectedMember]);

  const applyMemberListResult = useCallback(
    (items: GroupMember[], total: number, matched: number, asFullList: boolean) => {
      if (asFullList) {
        setMembers(items);
        setSelectedIds((prev) => prev.filter((id) => items.some((m) => m.id === id)));
      }
      setDisplayedMembers(items);
      setMemberTotal(total);
      setMemberMatched(matched);
    },
    [],
  );

  const reloadMembers = useCallback(async () => {
    setLoading(true);
    try {
      const full = await listMembers(conversationId, '');
      if (!full.ok) {
        message.error(full.error.message);
        return;
      }
      setMembers(full.data.items);
      setMemberTotal(full.data.total);
      setSelectedIds((prev) => prev.filter((id) => full.data.items.some((m) => m.id === id)));

      const q = memberFilterQueryRef.current;
      if (q.trim()) {
        const filtered = await listMembers(conversationId, q);
        if (filtered.ok) {
          setDisplayedMembers(filtered.data.items);
          setMemberMatched(filtered.data.matched);
          setMemberTotal(filtered.data.total);
        } else {
          message.error(filtered.error.message);
          applyMemberListResult(full.data.items, full.data.total, full.data.matched, false);
        }
      } else {
        setDisplayedMembers(full.data.items);
        setMemberMatched(full.data.matched);
      }
    } finally {
      setLoading(false);
    }
  }, [applyMemberListResult, conversationId]);

  useEffect(() => {
    void reloadMembers();
  }, [reloadMembers]);

  useEffect(() => {
    return () => {
      if (memberSearchTimerRef.current) {
        clearTimeout(memberSearchTimerRef.current);
      }
      if (candidateSearchTimerRef.current) {
        clearTimeout(candidateSearchTimerRef.current);
      }
    };
  }, []);

  const runMemberSearch = useCallback(
    async (query: string) => {
      setLoading(true);
      try {
        const result = await listMembers(conversationId, query);
        if (result.ok) {
          setDisplayedMembers(result.data.items);
          setMemberMatched(result.data.matched);
          setMemberTotal(result.data.total);
        } else {
          message.error(result.error.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [conversationId],
  );

  const onMemberFilterChange = useCallback(
    (query: string) => {
      setMemberFilterQuery(query);
      if (memberSearchTimerRef.current) {
        clearTimeout(memberSearchTimerRef.current);
      }
      memberSearchTimerRef.current = setTimeout(() => {
        void runMemberSearch(query);
      }, 200);
    },
    [runMemberSearch],
  );

  const onToggleMemberSelect = useCallback((memberId: string) => {
    setSelectedIds((prev) =>
      prev.includes(memberId) ? prev.filter((id) => id !== memberId) : [...prev, memberId],
    );
  }, []);

  const runCandidateSearch = useCallback(
    async (query: string) => {
      setLoading(true);
      try {
        const result = await searchCandidates(conversationId, query);
        if (result.ok) {
          setCandidates(result.data.items);
          setCandidateMatched(result.data.matched);
          setCandidateTotal(result.data.total);
          if (!query.trim()) {
            setCandidatePoolExhausted(result.data.total === 0);
          }
        } else {
          message.error(result.error.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [conversationId],
  );

  const onOpenAddModal = useCallback(async () => {
    setAddModalOpen(true);
    setCandidateSelectedIds([]);
    setCandidateQuery('');
    await runCandidateSearch('');
  }, [runCandidateSearch]);

  const onCloseAddModal = useCallback(() => {
    setAddModalOpen(false);
    setCandidateSelectedIds([]);
    setCandidateQuery('');
    if (candidateSearchTimerRef.current) {
      clearTimeout(candidateSearchTimerRef.current);
    }
  }, []);

  const onCandidateQueryChange = useCallback(
    (query: string) => {
      setCandidateQuery(query);
      if (candidateSearchTimerRef.current) {
        clearTimeout(candidateSearchTimerRef.current);
      }
      candidateSearchTimerRef.current = setTimeout(() => {
        void runCandidateSearch(query);
      }, 200);
    },
    [runCandidateSearch],
  );

  const onToggleCandidateSelect = useCallback((candidateId: string) => {
    setCandidateSelectedIds((prev) =>
      prev.includes(candidateId)
        ? prev.filter((id) => id !== candidateId)
        : [...prev, candidateId],
    );
  }, []);

  const syncFromServerOrRollback = useCallback(
    async (snapshot: GroupMember[]) => {
      const reload = await listMembers(conversationId, '');
      if (reload.ok) {
        setMembers(reload.data.items);
        setSelectedIds((prev) => prev.filter((id) => reload.data.items.some((m) => m.id === id)));
        const q = memberFilterQueryRef.current;
        if (q.trim()) {
          const filtered = await listMembers(conversationId, q);
          if (filtered.ok) {
            setDisplayedMembers(filtered.data.items);
            setMemberMatched(filtered.data.matched);
            setMemberTotal(filtered.data.total);
          } else {
            setDisplayedMembers(reload.data.items);
            setMemberMatched(reload.data.matched);
            setMemberTotal(reload.data.total);
          }
        } else {
          setDisplayedMembers(reload.data.items);
          setMemberMatched(reload.data.matched);
          setMemberTotal(reload.data.total);
        }
      } else {
        setMembers(snapshot);
        setDisplayedMembers(snapshot);
        setMemberTotal(snapshot.length);
        setMemberMatched(snapshot.length);
      }
    },
    [conversationId],
  );

  const onConfirmAdd = useCallback(async () => {
    if (candidateSelectedIds.length === 0) {
      message.warning('请先选择要添加的 Agent');
      return;
    }

    const snapshot = members;
    const toAdd = candidates.filter((c) => candidateSelectedIds.includes(c.id));
    setLoading(true);

    try {
      for (const candidate of toAdd) {
        const result = await addMember(conversationId, candidate);
        if (!result.ok) {
          await syncFromServerOrRollback(snapshot);
          message.error(result.error.message);
          return;
        }
      }

      await reloadMembers();
      message.success(`已添加 ${toAdd.length} 个 Agent`);
      setAddModalOpen(false);
      setCandidateSelectedIds([]);
      setCandidateQuery('');
    } catch (e) {
      await syncFromServerOrRollback(snapshot);
      message.error(e instanceof Error ? e.message : '添加失败，界面已与服务端对齐');
    } finally {
      setLoading(false);
    }
  }, [candidateSelectedIds, candidates, conversationId, members, reloadMembers, syncFromServerOrRollback]);

  const executeRemove = useCallback(
    async (ids: string[], confirmed: boolean) => {
      const snapshot = members;
      setLoading(true);
      try {
        for (const memberId of ids) {
          const result = await removeMember(conversationId, memberId, { confirmed });
          if (!result.ok) {
            await syncFromServerOrRollback(snapshot);
            message.error(result.error.message);
            return;
          }
        }

        await reloadMembers();
        setSelectedIds([]);
        message.success('已移出选中 Agent');
      } catch (e) {
        await syncFromServerOrRollback(snapshot);
        message.error(e instanceof Error ? e.message : '移出失败，界面已与服务端对齐');
      } finally {
        setLoading(false);
      }
    },
    [conversationId, members, reloadMembers, syncFromServerOrRollback],
  );

  const onRemoveSelected = useCallback(() => {
    if (selectedIds.length === 0) {
      message.warning('请先选择要移出的 Agent');
      return;
    }

    const inUseMembers = members.filter((m) => selectedIds.includes(m.id) && m.inUse);
    if (inUseMembers.length > 0) {
      const names = inUseMembers.map((m) => m.name).join('、');
      Modal.confirm({
        title: '确认移出正在使用的 Agent？',
        content: `「${names}」正在参与当前协作。移出后可能中断相关任务，是否继续？`,
        okText: '确认移出',
        cancelText: '取消',
        okButtonProps: { danger: true },
        onOk: () => executeRemove(selectedIds, true),
      });
      return;
    }

    void executeRemove(selectedIds, false);
  }, [executeRemove, members, selectedIds]);

  const onSaveRole = useCallback(async () => {
    if (!singleSelectedMember) {
      message.warning('请先只选择一个 Agent 再修改角色');
      return;
    }
    if (!roleDraft) {
      message.warning('请选择项目角色');
      return;
    }

    const snapshot = members;
    setLoading(true);
    try {
      const result = await updateMemberRole(conversationId, singleSelectedMember.id, roleDraft);
      if (!result.ok) {
        await syncFromServerOrRollback(snapshot);
        message.error(result.error.message);
        setRoleDraft(singleSelectedMember.projectRole);
        return;
      }

      await reloadMembers();
      message.success('项目角色已更新');
    } catch (e) {
      await syncFromServerOrRollback(snapshot);
      message.error(e instanceof Error ? e.message : '修改角色失败，界面已与服务端对齐');
    } finally {
      setLoading(false);
    }
  }, [conversationId, members, reloadMembers, roleDraft, singleSelectedMember, syncFromServerOrRollback]);

  const onToggleServerSnapshot = useCallback(() => {
    setServerSnapshotVisible((v) => !v);
  }, []);

  const serverSnapshotJson = useMemo(() => JSON.stringify(members, null, 2), [members]);

  return (
    <ThreePointComponentComponent
      loggedinUser={loggedinUser}
      conversationId={conversationId}
      dialogueFileList={dialogueFileList}
      dialogueDataSchemaList={dialogueDataSchemaList}
      previewUrlOfSelectedSchema={previewUrlOfSelectedSchema}
      actions={actions}
      displayedMembers={displayedMembers}
      memberFilterQuery={memberFilterQuery}
      memberMatched={memberMatched}
      memberTotal={memberTotal}
      selectedIds={selectedIds}
      loading={loading}
      addModalOpen={addModalOpen}
      candidates={candidates}
      candidateQuery={candidateQuery}
      candidateSelectedIds={candidateSelectedIds}
      candidateMatched={candidateMatched}
      candidateTotal={candidateTotal}
      candidatePoolExhausted={candidatePoolExhausted}
      serverSnapshotVisible={serverSnapshotVisible}
      serverSnapshotJson={serverSnapshotJson}
      roleEditorVisible={Boolean(singleSelectedMember)}
      roleEditorMemberName={singleSelectedMember?.name ?? ''}
      roleDraft={roleDraft}
      projectRoleOptions={projectRoleOptions}
      onMemberFilterChange={onMemberFilterChange}
      onToggleMemberSelect={onToggleMemberSelect}
      onOpenAddModal={onOpenAddModal}
      onCloseAddModal={onCloseAddModal}
      onCandidateQueryChange={onCandidateQueryChange}
      onToggleCandidateSelect={onToggleCandidateSelect}
      onConfirmAdd={onConfirmAdd}
      onRemoveSelected={onRemoveSelected}
      onToggleServerSnapshot={onToggleServerSnapshot}
      onRoleDraftChange={setRoleDraft}
      onSaveRole={onSaveRole}
    />
  );
};

export default ThreePointComponentWrapper;
