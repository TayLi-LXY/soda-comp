import React from 'react';
import BubbleComponentWrapper from '@/components/BubbleComponent/wrapper';
import styles from './index.module.css';
import type { QuerySummaryComponentProps } from './types';

/**
 * 组件布局: 查询摘要组件
 */
const QuerySummaryComponentComponent: React.FC<QuerySummaryComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <BubbleComponentWrapper
          content={props.summarizeContent}
          streaming
          placement="start"
        />
      </div>
    </>
  );
};

export default QuerySummaryComponentComponent;
