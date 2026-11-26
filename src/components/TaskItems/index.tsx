import React from 'react';
import { Checkbox } from 'antd';
import SimplificationOfIntelligentAgentsWrapper from '@/components/SimplificationOfIntelligentAgents/wrapper';
import styles from './index.module.css';
import type { TaskItemsProps } from './types';

/**
 * 组件布局: 任务单项
 */
const TaskItemsComponent: React.FC<TaskItemsProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <Checkbox
          className={styles.divCheckbox0}
          autoFocus={false}
          checked={false}
          defaultChecked={false}
          disabled={false}
          indeterminate={false}
        >
          {props.entity.name}
        </Checkbox>
        <div
          className={styles.divDiv1}
        >
          <SimplificationOfIntelligentAgentsWrapper/>
        </div>
      </div>
    </>
  );
};

export default TaskItemsComponent;
