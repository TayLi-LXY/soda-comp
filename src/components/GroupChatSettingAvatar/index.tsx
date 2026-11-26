import React from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import type { GroupChatSettingAvatarProps } from './types';
import { DEFAULT_AVATAR } from '@/mocks/groupMembers';

/**
 * 组件布局: 群聊设置头像（会话 Agent 单项）
 */
const GroupChatSettingAvatarComponent: React.FC<GroupChatSettingAvatarProps> = (props) => {
  const { member, selected, onSelect } = props;
  const avatarSrc = member.avatar || DEFAULT_AVATAR;
  const originLabel = member.originSessionTitle
    ? `来自：${member.originSessionTitle}`
    : member.projectRole;

  return (
    <>
      <div
        className={`${styles.div}${selected ? ` ${styles.divSelected}` : ''}`}
        onClick={() => onSelect?.(member.id)}
        title={`${member.name} · 项目角色：${member.projectRole} · 来自会话：${member.originSessionTitle}${member.inUse ? ' · 使用中' : ''}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect?.(member.id);
          }
        }}
      >
        <div className={styles.avatarWrap}>
          <Image
            className={styles.divImage0}
            src={avatarSrc}
            alt={member.name}
            width={40}
            height={40}
            unoptimized
          />
          {member.inUse && <span className={styles.inUseBadge}>使用中</span>}
        </div>
        <p className={styles.divP1}>{member.name}</p>
        <p className={styles.divP2}>{member.projectRole}</p>
        <p className={styles.divP3}>{originLabel}</p>
      </div>
    </>
  );
};

export default GroupChatSettingAvatarComponent;
