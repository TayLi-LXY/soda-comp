import React from 'react';
import TaskItemsWrapper from '@/components/TaskItems/wrapper';
import styles from './index.module.css';
import type { TaskListProps } from './types';

/**
 * 组件布局: 任务列表
 */
const TaskListComponent: React.FC<TaskListProps> = (props) => {

  return (
    <>
      <div
        className={styles.taskConfirmationPanel}
      >
        { props.intelligentAgentExecutionTaskListData.map((entity, index) => (<TaskItemsWrapper
          entity={entity}
          index={index}
        />))}
      </div>
    </>
  );
};

export default TaskListComponent;
