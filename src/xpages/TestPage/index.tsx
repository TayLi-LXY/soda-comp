import React from 'react';
import FilePreviewComponentWrapper from '@/components/FilePreviewComponent/wrapper';
import AGGridWrapper from '@/components/AGGrid/wrapper';
import QueryResultDisplayComponentWrapper from '@/components/QueryResultDisplayComponent/wrapper';
import CollaborativeFlowWrapper from '@/components/CollaborativeFlow/wrapper';
import styles from './index.module.css';
import type { TestPageProps } from './types';

/**
 * 组件布局: 测试页面
 */
const TestPagePage: React.FC<TestPageProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        { props.filePreviewVisibleControl && (<div
          className={styles.divDiv0}
        >
          <p
            className={styles.divDiv0P0}
          >
            {`文件预览`}
          </p>
          <FilePreviewComponentWrapper
            documents={props.documents}
          />
        </div>)}
        <div
          className={styles.divDiv1}
        >
          { props.aggridVisibleControl && (<div
            className={styles.initializeAGGRId}
          >
            <p
              className={styles.initializeAGGRIdP0}
            >
              {`ag-grid`}
            </p>
            <AGGridWrapper
              {...props.actions.eventsInitializeAGGRIdComponent}
              rowData={props.rowData}
              columnDefs={props.columnDefs}
              onRowClicked={props.onRowClicked}
              onSelectionChanged={props.onSelectionChanged}
              onGridReady={props.onGridReady}
            />
          </div>)}
        </div>
        { props.gridVisibleControl && (<div
          className={styles.divDiv2}
        >
          <QueryResultDisplayComponentWrapper/>
        </div>)}
        <CollaborativeFlowWrapper/>
      </div>
    </>
  );
};

export default TestPagePage;
