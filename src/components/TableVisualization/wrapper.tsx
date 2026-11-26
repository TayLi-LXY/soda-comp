'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { TableVisualizationWrapperProps } from './types';
import { onMonitorURL } from './actions';
import type { Setter } from './setter';
import TableVisualizationComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 表可视化
 */
const TableVisualizationWrapper: React.FC<TableVisualizationWrapperProps> = (props) => {
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
  const dispatch = useDispatch();
  // 内部数据: 选中的schema预览Url(previewUrlOfSelectedSchema)
  const { previewUrlOfSelectedSchema } = props;
  // 内部可变数据: 文件列表(fileList)
  const [fileList, setFileList] = useState<File[]>([]);
  const setter: Setter = useMemo(() => { return { setFileList };}, []);

  // 组件tableVisualization数据变化触发的交互入口：监听Url
  useEffect(() => onMonitorURL(setter, dispatch, previewUrlOfSelectedSchema), [setter, dispatch, previewUrlOfSelectedSchema]);


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
    <TableVisualizationComponent 
      previewUrlOfSelectedSchema={previewUrlOfSelectedSchema}
      fileList={fileList}
      setFileList={setFileList}
    />
  );
};

export default TableVisualizationWrapper;
