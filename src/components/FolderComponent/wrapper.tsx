'use client';
import React from 'react';
import type { FolderComponentWrapperProps } from './types';
import FolderComponentComponent from './index';


/**
 * 组件逻辑: 文件夹组件
 */
const FolderComponentWrapper: React.FC<FolderComponentWrapperProps> = (props) => {
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
  // 内部数据: 文件树数据(treeData)
  const { treeData } = props;
  // 内部数据: 是否开启选择功能(selectable)
  const { selectable } = props;
  // 内部数据: 空状态时的展示内容(emptyRender)
  const { emptyRender } = props;

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


  /*
   * [END OF YOUR CODE]
   */
  return (
    <FolderComponentComponent 
      treeData={treeData}
      selectable={selectable}
      emptyRender={emptyRender}
    />
  );
};

export default FolderComponentWrapper;
