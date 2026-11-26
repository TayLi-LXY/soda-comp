import React from 'react';
import styles from './index.module.css';
import type { EmptyLayoutProps } from './types';

/**
 * 组件布局: 空布局
 */
const EmptyLayoutPage: React.FC<EmptyLayoutProps> = (props) => {

  return (
    <>
      <div
        className={styles.layout}
      >
        {props.children}
      </div>
    </>
  );
};

export default EmptyLayoutPage;
