import React from 'react';
import styles from './index.module.css';
import type { SenderComponentProps } from './types';

/**
 * 组件布局: 输入框组件
 */
const SenderComponentComponent: React.FC<SenderComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      />
    </>
  );
};

export default SenderComponentComponent;
