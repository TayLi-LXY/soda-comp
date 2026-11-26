import React from 'react';
import styles from './index.module.css';
import type { WelcomeComponentProps } from './types';

/**
 * 组件布局: 欢迎组件
 */
const WelcomeComponentComponent: React.FC<WelcomeComponentProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      />
    </>
  );
};

export default WelcomeComponentComponent;
