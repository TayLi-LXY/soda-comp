import React from 'react';
import PersonnelListComponentWrapper from '@/components/PersonnelListComponent/wrapper';
import IntelligentAgentListComponentWrapper from '@/components/IntelligentAgentListComponent/wrapper';
import styles from './index.module.css';
import type { TeamMembersInviteComponentProps } from './types';

/**
 * 组件布局: 团队成员邀请组件
 */
const TeamMembersInviteComponentComponent: React.FC<TeamMembersInviteComponentProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <div
            className={styles.divDiv0Div0}
          >
            <p
              className={styles.divDiv0Div0P0}
            >
              {`人员`}
            </p>
          </div>
          <div
            className={styles.divDiv0Div1}
          >
            <p
              className={styles.divDiv0Div1P0}
            >
              {`智能体`}
            </p>
          </div>
        </div>
        <div
          className={styles.divDiv1}
        >
          <div
            className={styles.divDiv1Div0}
          >
            <PersonnelListComponentWrapper/>
          </div>
          <div
            className={styles.divDiv1Div1}
          >
            <IntelligentAgentListComponentWrapper/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMembersInviteComponentComponent;
