import React from 'react';
import RightpMenuWrapper from '@/components/RightpMenu/wrapper';
import ModelCanvasWrapper from '@/components/ModelCanvas/wrapper';
import TableVisualizationWrapper from '@/components/TableVisualization/wrapper';
import CollaborativeFlowWrapper from '@/components/CollaborativeFlow/wrapper';
import styles from './index.module.css';
import type { PanelProps } from './types';
import { CloudUploadOutlined, EyeOutlined } from '@ant-design/icons';

/**
 * 组件布局: 面板
 */
const PanelComponent: React.FC<PanelProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.panelContainer}
        >
          <div
            className={styles.panelContainerDiv0}
          >
            <RightpMenuWrapper/>
          </div>
          <div
            className={styles.panelContainerDiv1}
          >
            { props.canvasVisible && (<ModelCanvasWrapper
              diagramRef={props.diagramRef}
              toolbarConfig={props.toolbarConfig}
            />)}
            { props.tableVisualizationVisible && (<TableVisualizationWrapper
              previewUrlOfSelectedSchema={props.previewUrlOfSelectedSchema}
            />)}
            { props.collaborativeFlowVisible && (<CollaborativeFlowWrapper/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelComponent;
