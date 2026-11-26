import React from 'react';
import styles from './index.module.css';
import type { PreviewComponentProps } from './types';

/**
 * 组件布局: 预览组件
 */
const PreviewComponentComponent: React.FC<PreviewComponentProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      />
    </>
  );
};

export default PreviewComponentComponent;
