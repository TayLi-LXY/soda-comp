import React from 'react';
import styles from './index.module.css';
import type { NotificationComponentProps } from './types';

/**
 * 组件布局: 系统通知组件
 */
const NotificationComponentComponent: React.FC<NotificationComponentProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      />
    </>
  );
};

export default NotificationComponentComponent;
