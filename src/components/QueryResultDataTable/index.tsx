import React from 'react';
import AGGridWrapper from '@/components/AGGrid/wrapper';
import styles from './index.module.css';
import type { QueryResultDataTableProps } from './types';

/**
 * 组件布局: 查询结果数据表
 */
const QueryResultDataTableComponent: React.FC<QueryResultDataTableProps> = (props) => {

  return (
    <>
      <div
        className={styles.queryResultContainer}
      >
        <AGGridWrapper
          rowData={props.rowData}
          columnDefs={props.columnDefs}
        />
      </div>
    </>
  );
};

export default QueryResultDataTableComponent;
