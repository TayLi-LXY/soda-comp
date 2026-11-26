import React from 'react';
import styles from './index.module.css';
import type { TableVisualizationProps } from './types';

import DocViewer, { DocViewerRenderers } from "@iamjariwala/react-doc-viewer";
import QueryResultDataTableWrapper from '../QueryResultDataTable/wrapper';

/**
 * 组件布局: 表可视化
 */
const TableVisualizationComponent: React.FC<TableVisualizationProps> = (props) => {


  return (
    <>
      <div
        className={styles.tableVisualization}
      >

        <QueryResultDataTableWrapper/>
        {/* <DocViewer 
            style={{overflowY: 'scroll'}} 
            config={{
              themeMode: "dark",
              pdfVerticalScrollByDefault: true,
              pdfZoom: {
                defaultZoom: 100,
                zoomJump: 10,
              },
              print: {
                enablePrint: false,
              },
              annotations: {
                enableAnnotations: true,
                defaultColor: "#FFFF00",
                colors: ["#FFFF00", "#FF6B6B", "#4ECDC4"],
                tools: ["select", "highlight", "pen", "comment", "eraser"],
                onAnnotationChange: (annotations) => console.log(annotations),
                initialAnnotations: [],
              },    watermark: {
                text: "CONFIDENTIAL",
                opacity: 0.08,
                fontSize: 52,
                color: "#ff0000",
                rotation: -35,
              },
              header: {
                disableHeader: true,
              },
              csvDelimiter: ",",
            }}
            pluginRenderers={DocViewerRenderers} 
            documents={props.fileList.map((file) => ({
            uri: window.URL.createObjectURL(file),
            fileName: file.name,
          }))}
        /> */}
      </div>
    </>
  );
};

export default TableVisualizationComponent;
