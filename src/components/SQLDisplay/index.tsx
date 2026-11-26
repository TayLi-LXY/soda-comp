import React from 'react';
import CodeHighlightingWrapper from '@/components/CodeHighlighting/wrapper';
import styles from './index.module.css';
import type { SQLDisplayProps } from './types';

/**
 * 组件布局: SQL展示
 */
const SQLDisplayComponent: React.FC<SQLDisplayProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <CodeHighlightingWrapper
          code={props.sQLStatement}
          lang="sql"
        />
      </div>
    </>
  );
};

export default SQLDisplayComponent;
