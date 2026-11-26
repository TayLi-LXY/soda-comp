'use client';
import React from 'react';
import styles from './index.module.css';
import type { GridComponentProps } from './types';
import { AgGridProvider, AgGridReact } from 'ag-grid-react';
import { AllCommunityModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

/**
 * 组件布局: 数据表格组件
 */
const GridComponentComponent: React.FC<GridComponentProps> = (props) => {

  return (
    <AgGridProvider modules={[AllCommunityModule]}>
      <div className={styles.gridContainer}>
        <div className="ag-theme-quartz" style={{ width: '100%', height: '100%' }}>
          <AgGridReact
            theme="legacy"
            rowData={props.rowData}
            columnDefs={props.columnDefs}
            onRowClicked={props.onRowClicked}
            onSelectionChanged={props.onSelectionChanged}
            onGridReady={props.onGridReady}
          />
        </div>
      </div>
    </AgGridProvider>
  );
};

export default GridComponentComponent;
