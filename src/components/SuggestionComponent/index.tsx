import React from 'react';
import styles from './index.module.css';
import type { SuggestionComponentProps } from './types';

/**
 * 组件布局: 快捷指令组件
 */
const SuggestionComponentComponent: React.FC<SuggestionComponentProps> = () => {

  return (
    <>
      <div
        className={styles.div}
      />
    </>
  );
};

export default SuggestionComponentComponent;
