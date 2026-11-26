import React from 'react';
import styles from './index.module.css';
import type { AGGridProps } from './types';
import { AgGridProvider, AgGridReact } from 'ag-grid-react';
import { AllCommunityModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const MIN_COLUMN_WIDTH = 120;
const MAX_COLUMN_WIDTH = 360;
const CELL_HORIZONTAL_PADDING = 36;
const CHARACTER_WIDTH = 8;

function clampColumnWidth(width: number) {
  return Math.min(Math.max(width, MIN_COLUMN_WIDTH), MAX_COLUMN_WIDTH);
}

function estimateGridWidth(columnDefs: any[] = [], rowData: any[] = []) {
  if (columnDefs.length === 0) {
    return MIN_COLUMN_WIDTH;
  }

  const sampleRows = rowData.slice(0, 50);
  const totalWidth = columnDefs.reduce((sum, columnDef) => {
    const field = columnDef?.field;
    const headerName = columnDef?.headerName || field || '';
    const longestValueLength = sampleRows.reduce((maxLength, row) => {
      const value = field ? row?.[field] : '';
      return Math.max(maxLength, String(value ?? '').length);
    }, String(headerName).length);

    return sum + clampColumnWidth(longestValueLength * CHARACTER_WIDTH + CELL_HORIZONTAL_PADDING);
  }, 2);

  return totalWidth;
}

/**
 * 组件布局: AGGrid数据展示
 */
const AGGridComponent: React.FC<AGGridProps> = (props) => {
  const gridWidth = estimateGridWidth(props.columnDefs, props.rowData);

  return (
    <AgGridProvider modules={[AllCommunityModule]}>
      <div className={styles.gridContainer}>
        <div className="ag-theme-quartz" style={{ width: `${gridWidth}px`, maxWidth: '100%' }}>
          <AgGridReact
            theme="legacy"
            rowData={props.rowData}
            columnDefs={props.columnDefs}
            domLayout="autoHeight"
            autoSizeStrategy={{
              type: 'fitCellContents',
              defaultMinWidth: 120,
              defaultMaxWidth: 360,
            }}
            defaultColDef={{
              resizable: true,
            }}
            onRowClicked={props.onRowClicked}
            onSelectionChanged={props.onSelectionChanged}
            onGridReady={props.onGridReady}
          />
        </div>
      </div>
    </AgGridProvider>
  );
};

export default AGGridComponent;
