'use client';
import React from 'react';
import type { FilePreviewComponentWrapperProps } from './types';
import FilePreviewComponentComponent from './index';


/**
 * 组件逻辑: 文件预览组件
 */
const FilePreviewComponentWrapper: React.FC<FilePreviewComponentWrapperProps> = (props) => {
  /*
   * 前置代码数据区域
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  // 内部数据: 文件地址(documents)
  // const { documents } = props;

  /*
   * end
   */

  /*
   * 获取父组件传值
   * 定义当前组件数据
   * 定义静态变量
   * 获取组件redux数据
   * 获取组件挂载模型数据
   * 获取组件挂载流程数据
   * 装配子组件数据
   * 自定义代码区域
   * [YOUR CODE HERE]
   */
  const previewDocuments = (props.documents ?? []).map((url) => ({ uri: url }));

  /*
   * [END OF YOUR CODE]
   */
  return (
    <FilePreviewComponentComponent
      documents={previewDocuments}
    />
  );
};

export default FilePreviewComponentWrapper;
