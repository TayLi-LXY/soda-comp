import {
  ensureConversationMembers,
  filterMembersSnapshot,
  findMemberOccupyingRole,
  getAvailableCandidates,
  getOperatorCanManage,
  searchAvailableCandidates,
  setMembersForConversation,
  setOperatorCanManage,
} from './store';
import type {
  GroupMember,
  GroupMemberCandidate,
  MockApiResult,
  MockFailureMode,
  RemoveMemberOptions,
  SearchListResult,
} from './types';

const DELAY_MS = 300;

let injectedFailure: MockFailureMode = null;

/** 开发 / 验收：注入下一次 add 或 remove 失败；传 null 清除 */
export function setMockFailure(mode: MockFailureMode): void {
  injectedFailure = mode;
  if (typeof window !== 'undefined') {
    (window as Window & { __groupMemberMockFailure?: MockFailureMode }).__groupMemberMockFailure = mode;
  }
  console.info('[groupMembers.mock] setMockFailure =', mode);
}

export function getMockFailure(): MockFailureMode {
  return injectedFailure;
}

function delay(ms = DELAY_MS): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function consumeFailure(op: 'add' | 'remove'): boolean {
  if (injectedFailure === op) {
    injectedFailure = null;
    if (typeof window !== 'undefined') {
      (window as Window & { __groupMemberMockFailure?: MockFailureMode }).__groupMemberMockFailure = null;
    }
    return true;
  }
  return false;
}

function permissionDenied(action: string): MockApiResult<never> {
  return {
    ok: false,
    error: {
      code: 'PERMISSION_DENIED',
      message: `当前账号无管理权限，无法${action}`,
    },
  };
}

/**
 * 列出当前会话 Agent（可带 query 过滤）。UI 应以回读结果为准。
 */
export async function listMembers(
  conversationId?: string | null,
  query = '',
): Promise<MockApiResult<SearchListResult<GroupMember>>> {
  await delay(query.trim() ? 150 : 300);
  const data = filterMembersSnapshot(conversationId, query);
  console.info('[groupMembers.mock] listMembers', conversationId, query, data.matched, '/', data.total);
  return { ok: true, data };
}

/**
 * 检索可编入的历史会话 Agent；query 为空则返回全部未入群候选人
 */
export async function searchCandidates(
  conversationId: string | null | undefined,
  query = '',
): Promise<MockApiResult<SearchListResult<GroupMemberCandidate>>> {
  await delay(150);
  const data = searchAvailableCandidates(conversationId, query);
  console.info(
    '[groupMembers.mock] searchCandidates',
    conversationId,
    query,
    data.matched,
    '/',
    data.total,
  );
  return { ok: true, data };
}

/** listCandidates = 空查询的 search */
export async function listCandidates(
  conversationId?: string | null,
): Promise<MockApiResult<SearchListResult<GroupMemberCandidate>>> {
  return searchCandidates(conversationId, '');
}

/**
 * 添加 Agent → 写入内存「服务端」→ 调用方应再 listMembers 回读
 */
export async function addMember(
  conversationId: string | null | undefined,
  candidate: GroupMemberCandidate,
): Promise<MockApiResult<GroupMember>> {
  await delay();

  if (!getOperatorCanManage()) {
    return permissionDenied('添加 Agent');
  }

  if (consumeFailure('add')) {
    console.warn('[groupMembers.mock] addMember FAILED (injected)');
    return {
      ok: false,
      error: { code: 'GENERIC_FAILURE', message: '添加 Agent 失败（模拟服务端错误），界面已回滚' },
    };
  }

  const list = ensureConversationMembers(conversationId);
  if (list.some((m) => m.id === candidate.id)) {
    return {
      ok: false,
      error: { code: 'ALREADY_MEMBER', message: '该 Agent 已在当前会话中，不能重复绑定' },
    };
  }

  const occupied = findMemberOccupyingRole(conversationId, candidate.projectRole);
  if (occupied) {
    return {
      ok: false,
      error: {
        code: 'ROLE_CONFLICT',
        message: `项目角色「${candidate.projectRole}」已被「${occupied.name}」占用，请先调整对方角色或换一个角色后再添加`,
      },
    };
  }

  const nextMember: GroupMember = { ...candidate, inUse: candidate.inUse ?? false };
  setMembersForConversation(conversationId, [...list, nextMember]);
  console.info('[groupMembers.mock] addMember OK', conversationId, nextMember);
  return { ok: true, data: nextMember };
}

/**
 * 修改项目角色 → 调用方应再 listMembers 回读
 */
export async function updateMemberRole(
  conversationId: string | null | undefined,
  memberId: string,
  projectRole: string,
): Promise<MockApiResult<GroupMember>> {
  await delay();

  if (!getOperatorCanManage()) {
    return permissionDenied('修改角色');
  }

  const list = ensureConversationMembers(conversationId);
  const target = list.find((m) => m.id === memberId);
  if (!target) {
    return {
      ok: false,
      error: { code: 'NOT_FOUND', message: 'Agent 不存在或已移出' },
    };
  }

  if (target.projectRole === projectRole) {
    return { ok: true, data: { ...target } };
  }

  const occupied = findMemberOccupyingRole(conversationId, projectRole, memberId);
  if (occupied) {
    return {
      ok: false,
      error: {
        code: 'ROLE_CONFLICT',
        message: `项目角色「${projectRole}」已被「${occupied.name}」占用，请先调整对方角色或换一个角色`,
      },
    };
  }

  const updated: GroupMember = { ...target, projectRole };
  setMembersForConversation(
    conversationId,
    list.map((m) => (m.id === memberId ? updated : m)),
  );
  console.info('[groupMembers.mock] updateMemberRole OK', conversationId, updated);
  return { ok: true, data: updated };
}

/**
 * 移出 Agent。inUse 且未 confirmed 时返回 AGENT_IN_USE，不写库。
 */
export async function removeMember(
  conversationId: string | null | undefined,
  memberId: string,
  options?: RemoveMemberOptions,
): Promise<MockApiResult<{ id: string }>> {
  await delay();

  if (!getOperatorCanManage()) {
    return permissionDenied('移出 Agent');
  }

  if (consumeFailure('remove')) {
    console.warn('[groupMembers.mock] removeMember FAILED (injected)');
    return {
      ok: false,
      error: { code: 'GENERIC_FAILURE', message: '移出 Agent 失败（模拟服务端错误），界面已回滚' },
    };
  }

  const list = ensureConversationMembers(conversationId);
  const target = list.find((m) => m.id === memberId);
  if (!target) {
    return {
      ok: false,
      error: { code: 'NOT_FOUND', message: 'Agent 不存在或已移出' },
    };
  }

  if (target.inUse && options?.confirmed !== true) {
    return {
      ok: false,
      error: {
        code: 'AGENT_IN_USE',
        message: `「${target.name}」正在参与当前协作，请确认后再移出`,
      },
    };
  }

  setMembersForConversation(
    conversationId,
    list.filter((m) => m.id !== memberId),
  );
  console.info('[groupMembers.mock] removeMember OK', conversationId, memberId, options);
  return { ok: true, data: { id: memberId } };
}

/** 浏览器控制台快捷方式：window.__groupMemberMock */
if (typeof window !== 'undefined') {
  const api = {
    setMockFailure,
    getMockFailure,
    setOperatorCanManage,
    getOperatorCanManage,
    listMembers,
    listCandidates,
    searchCandidates,
    addMember,
    updateMemberRole,
    removeMember,
    peekAvailable: getAvailableCandidates,
  };
  (window as Window & { __groupMemberMock?: typeof api }).__groupMemberMock = api;
}
