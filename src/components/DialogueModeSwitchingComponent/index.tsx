import React from 'react';
import { Button } from 'antd';
import styles from './index.module.css';
import type { DialogueModeSwitchingComponentProps } from './types';
import { CodeOutlined, MessageOutlined, ScheduleOutlined } from '@ant-design/icons';

/**
 * 组件布局: 对话模式切换组件
 */
const DialogueModeSwitchingComponentComponent: React.FC<DialogueModeSwitchingComponentProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      >
        <Button
          className={styles.divButton0}
          type="default"
          icon={<MessageOutlined />}
        >
          {`对话`}
        </Button>
        <div
          className={styles.divDiv1}
        >
          <Button
            className={styles.divDiv1Button0}
            type="default"
            icon={<ScheduleOutlined />}
          >
            {`任务`}
          </Button>
        </div>
        <div
          className={styles.divDiv2}
        >
          <Button
            className={styles.divDiv2Button0}
            type="default"
            icon={<CodeOutlined />}
          >
            {`工作`}
          </Button>
        </div>
      </div>
    </>
  );
};

export default DialogueModeSwitchingComponentComponent;
