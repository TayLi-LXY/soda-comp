import React from 'react';
import styles from './index.module.css';
import type { ConversationsComponentProps } from './types';

/**
 * 组件布局: 管理对话组件
 */
const ConversationsComponentComponent: React.FC<ConversationsComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      />
    </>
  );
};

export default ConversationsComponentComponent;
