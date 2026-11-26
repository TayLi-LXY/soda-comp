import React from 'react';
import styles from './index.module.css';
import type { FolderComponentProps } from './types';
import { Folder } from '@ant-design/x';

/**
 * 组件布局: 文件夹组件
 */
const FolderComponentComponent: React.FC<FolderComponentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      />
      <Folder treeData={props.treeData} selectable={props.selectable} emptyRender={props.emptyRender} />
    </>
  );
};

export default FolderComponentComponent;
