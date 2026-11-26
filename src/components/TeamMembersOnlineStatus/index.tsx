import React from 'react';
import styles from './index.module.css';
import type { TeamMembersOnlineStatusProps } from './types';

/**
 * 组件布局: 团队成员在线状态
 */
const TeamMembersOnlineStatusComponent: React.FC<TeamMembersOnlineStatusProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        />
        <div
          className={styles.divDiv1}
        />
        <div
          className={styles.divDiv2}
        />
        <div
          className={styles.divDiv3}
        />
      </div>
    </>
  );
};

export default TeamMembersOnlineStatusComponent;
