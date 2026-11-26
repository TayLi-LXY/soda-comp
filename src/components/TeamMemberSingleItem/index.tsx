import React from 'react';
import TeamMembersOnlineStatusWrapper from '@/components/TeamMembersOnlineStatus/wrapper';
import styles from './index.module.css';
import type { TeamMemberSingleItemProps } from './types';

/**
 * 组件布局: 团队成员单项
 */
const TeamMemberSingleItemComponent: React.FC<TeamMemberSingleItemProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      >
        <p
          className={styles.divP0}
        >
          {`张`}
        </p>
        <TeamMembersOnlineStatusWrapper/>
      </div>
    </>
  );
};

export default TeamMemberSingleItemComponent;
