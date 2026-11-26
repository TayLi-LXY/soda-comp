'use client';
import React from 'react';
import styles from './index.module.css';
import type { FilePreviewComponentProps } from './types';

/**
 * 组件布局: 文件预览组件
 */
const FilePreviewComponentComponent: React.FC<FilePreviewComponentProps> = (props) => {
  if (!props.documents || props.documents.length === 0) {
    return (
      <div className={styles.docViewerContainer}>
        <p style={{ padding: '20px', color: '#999' }}>暂无文件可预览</p>
      </div>
    );
  }

  return (
    <div className={styles.docViewerContainer}>
      {props.documents.map((doc) => (
        <iframe
          key={doc.uri}
          src={doc.uri}
          className={styles.pdfFrame}
          title="PDF Preview"
        />
      ))}
    </div>
  );
};

export default FilePreviewComponentComponent;
