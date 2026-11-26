import React from 'react';
import styles from './index.module.css';
import type { SchemeCardSingleComponentProps } from './types';

/**
 * 组件布局: 方案卡片单项组件
 */
const SchemeCardSingleComponentComponent: React.FC<SchemeCardSingleComponentProps> = (props) => {

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
            {`方案一：XXX`}
          </p>
        </div>
        <div
          className={styles.divDiv1}
        >
          <p
            className={styles.divDiv1P0}
          >
            {`正文段落`}
          </p>
        </div>
      </div>
    </>
  );
};

export default SchemeCardSingleComponentComponent;
