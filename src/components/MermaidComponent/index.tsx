import React from 'react';
import styles from './index.module.css';
import type { MermaidComponentProps } from './types';

/**
 * 组件布局: 图表工具组件
 */
const MermaidComponentComponent: React.FC<MermaidComponentProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      />
    </>
  );
};

export default MermaidComponentComponent;
