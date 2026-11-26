import React from 'react';
import styles from './index.module.css';
import type { ModelCanvasProps } from './types';

import VisualDiagram from '@horsecoder/visual-core';

/**
 * 组件布局: 模型画布
 */
const ModelCanvasComponent: React.FC<ModelCanvasProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <VisualDiagram
          // className={styles.divDiv0}
          ref={props.diagramRef}
          {...props.actions.eventsDiv}
          canvasConfig={props.canvasConfig}
        />
      </div>
    </>
  );
};

export default ModelCanvasComponent;
