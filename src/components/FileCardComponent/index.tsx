import React from 'react';
import styles from './index.module.css';
import type { FileCardComponentProps } from './types';
import { FileCard } from '@ant-design/x';

/**
 * 组件布局: 文件卡片组件
 */
const FileCardComponentComponent: React.FC<FileCardComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      />
      <FileCard name={props.name} byte={props.byte} description={props.description} />
    </>
  );
};

export default FileCardComponentComponent;
