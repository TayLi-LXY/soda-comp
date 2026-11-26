import React from 'react';
import styles from './index.module.css';
import type { ReadUnreadComponentProps } from './types';

/**
 * 组件布局: 已读未读组件
 */
const ReadUnreadComponentComponent: React.FC<ReadUnreadComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        { props.unreadVisibleControl && (<div
          className={styles.divDiv0}
        >
          <p
            className={styles.divDiv0P0}
            content=""
          />
        </div>)}
        { props.readVisibleControl && (<div
          className={styles.divDiv1}
        >
          <p
            className={styles.divDiv1P0}
            content=""
          />
        </div>)}
      </div>
    </>
  );
};

export default ReadUnreadComponentComponent;
