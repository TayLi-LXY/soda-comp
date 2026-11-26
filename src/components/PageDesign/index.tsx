import React from 'react';
import styles from './index.module.css';
import type { PageDesignProps } from './types';

/**
 * 组件布局: 页面设计
 */
const PageDesignComponent: React.FC<PageDesignProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      />
    </>
  );
};

export default PageDesignComponent;
