import React from 'react';
import styles from './index.module.css';
import type { JoinedGroupChatProps } from './types';

/**
 * 组件布局: 已加入群聊
 */
const JoinedGroupChatComponent: React.FC<JoinedGroupChatProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      >
        <p
          className={styles.divP0}
        >
          {`xxx`}
        </p>
        <p
          className={styles.divP1}
        >
          {`已加入群聊`}
        </p>
      </div>
    </>
  );
};

export default JoinedGroupChatComponent;
