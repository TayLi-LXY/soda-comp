import React from 'react';
import styles from './index.module.css';
import type { DataModeProps } from './types';

import VisualDiagram from '@horsecoder/visual-core';

/**
 * 组件布局: 数据模型
 */
const DataModeComponent: React.FC<DataModeProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <VisualDiagram
          // className={styles.divDiv0}
          ref={props.diagramRef}
          // {...props.actions.eventsDivDiv0}
          canvasConfig={props.canvasConfig}
        />
      </div>
    </>
  );
};

export default DataModeComponent;
