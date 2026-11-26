import React from 'react';
import { Button } from 'antd';
import TeamMemberSingleItemWrapper from '@/components/TeamMemberSingleItem/wrapper';
import styles from './index.module.css';
import type { TeamHomepageDisplayComponentProps } from './types';

/**
 * 组件布局: 团队主页展示组件
 */
const TeamHomepageDisplayComponentComponent: React.FC<TeamHomepageDisplayComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
        >
          <p
            className={styles.divDiv0P0}
          >
            {`团队成员`}
          </p>
          <Button
            className={styles.divDiv0Button1}
            type="text"
          >
            {`管理`}
          </Button>
        </div>
        <div
          className={styles.divDiv1}
        >
          { props.teamMemberList.map((entity, index) => (<TeamMemberSingleItemWrapper
            entity={entity}
            index={index}
          />))}
        </div>
      </div>
    </>
  );
};

export default TeamHomepageDisplayComponentComponent;
