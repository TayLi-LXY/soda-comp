import React from 'react';
import { Input, Modal, Checkbox, Button, Spin, Empty, Select } from 'antd';
import GroupChatSettingAvatarWrapper from '@/components/GroupChatSettingAvatar/wrapper';
import GroupFileWrapper from '@/components/GroupFile/wrapper';
import DataSchemaWrapper from '@/components/DataSchema/wrapper';
import styles from './index.module.css';
import type { ThreePointComponentProps } from './types';

/**
 * 组件布局: 三点组件（群聊设置 — 会话 Agent 成员）
 */
const ThreePointComponentComponent: React.FC<ThreePointComponentProps> = (props) => {
  const candidateEmptyDescription = props.candidatePoolExhausted
    ? '可添加的 Agent 已全部在当前会话中'
    : props.candidateQuery.trim()
      ? '无匹配的历史会话 Agent'
      : '暂无可添加的历史会话 Agent';

  return (
    <>
      <div className={styles.threeOclock}>
        <div className={styles.threeOclockDiv0}>
          <Input
            className={styles.threeOclockDiv0Input0}
            placeholder="搜索本会话 Agent（名称 / 角色 / 来源会话）"
            allowClear
            value={props.memberFilterQuery}
            onChange={(e) => props.onMemberFilterChange(e.target.value)}
          />
          <p className={styles.searchCount}>
            匹配 {props.memberMatched} / 共 {props.memberTotal}
          </p>
        </div>
        <div className={styles.threeOclockDiv1}>
          <div className={styles.memberSectionHeader}>
            <span className={styles.memberSectionTitle}>群成员（Agent）</span>
            <Button type="link" size="small" onClick={props.onToggleServerSnapshot}>
              {props.serverSnapshotVisible ? '隐藏服务端快照' : '显示服务端快照'}
            </Button>
          </div>

          {props.serverSnapshotVisible && (
            <pre className={styles.serverSnapshot}>{props.serverSnapshotJson}</pre>
          )}

          <Spin spinning={props.loading}>
            <div className={styles.threeOclockDiv1Div0}>
              {props.displayedMembers.map((member) => (
                <GroupChatSettingAvatarWrapper
                  key={member.id}
                  member={member}
                  selected={props.selectedIds.includes(member.id)}
                  onSelect={props.onToggleMemberSelect}
                />
              ))}

              <div
                className={styles.threeOclockDiv1Div0Div1}
                onClick={props.onOpenAddModal}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    props.onOpenAddModal();
                  }
                }}
              >
                <div className={styles.threeOclockDiv1Div0Div1Div0}>
                  <p className={styles.threeOclockDiv1Div0Div1Div0P0}>{`+`}</p>
                </div>
                <p className={styles.threeOclockDiv1Div0Div1P1}>{`添加`}</p>
              </div>

              <div
                className={styles.threeOclockDiv1Div0Div2}
                onClick={props.onRemoveSelected}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    props.onRemoveSelected();
                  }
                }}
              >
                <div className={styles.threeOclockDiv1Div0Div2Div0}>
                  <p className={styles.threeOclockDiv1Div0Div2Div0P0}>{`-`}</p>
                </div>
                <p className={styles.threeOclockDiv1Div0Div2P1}>{`移出`}</p>
              </div>
            </div>
          </Spin>

          {props.roleEditorVisible && (
            <div className={styles.roleEditor}>
              <p className={styles.roleEditorHint}>
                修改「{props.roleEditorMemberName}」的项目角色（同会话内角色不可重复）
              </p>
              <div className={styles.roleEditorRow}>
                <Select
                  className={styles.roleSelect}
                  value={props.roleDraft}
                  options={props.projectRoleOptions}
                  onChange={(value) => props.onRoleDraftChange(value)}
                />
                <Button type="primary" size="small" loading={props.loading} onClick={props.onSaveRole}>
                  保存角色
                </Button>
              </div>
            </div>
          )}

          <div className={styles.threeOclockDiv1Div1}>
            <GroupFileWrapper dialogueFileList={props.dialogueFileList} />
          </div>
          <div className={styles.threeOclockDiv1Div2}>
            <div className={styles.threeOclockDiv1Div2Div0}>
              <DataSchemaWrapper
                {...props.actions.eventsDataSchemaList}
                dialogueDataSchemaList={props.dialogueDataSchemaList}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="从历史会话检索并添加 Agent"
        open={props.addModalOpen}
        onCancel={props.onCloseAddModal}
        onOk={props.onConfirmAdd}
        okText="确认添加"
        cancelText="取消"
        confirmLoading={props.loading}
        destroyOnHidden
      >
        <Input
          className={styles.candidateSearch}
          placeholder="按名称 / 项目角色 / 来源会话检索"
          allowClear
          value={props.candidateQuery}
          onChange={(e) => props.onCandidateQueryChange(e.target.value)}
        />
        <p className={styles.searchCount}>
          匹配 {props.candidateMatched} / 共 {props.candidateTotal}（可添加池）
        </p>
        {props.candidates.length === 0 ? (
          <Empty description={candidateEmptyDescription} />
        ) : (
          <div className={styles.candidateList}>
            {props.candidates.map((c) => (
              <label key={c.id} className={styles.candidateItem}>
                <Checkbox
                  checked={props.candidateSelectedIds.includes(c.id)}
                  onChange={() => props.onToggleCandidateSelect(c.id)}
                />
                <span className={styles.candidateMeta}>
                  <span className={styles.candidateName}>{c.name}</span>
                  <span className={styles.candidateSub}>
                    项目角色：{c.projectRole} · 来自会话：{c.originSessionTitle}
                  </span>
                </span>
              </label>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
};

export default ThreePointComponentComponent;
