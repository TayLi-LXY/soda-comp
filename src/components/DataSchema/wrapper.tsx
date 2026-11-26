'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { DataSchemaWrapperProps } from './types';
import { onInitializeDataListControl } from './actions';
import type { Setter } from './setter';
import DataSchemaComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 数据Schema
 */
const DataSchemaWrapper: React.FC<DataSchemaWrapperProps> = (props) => {
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
  // 内部数据: 对话数据模式列表(dialogueDataSchemaList)
  const { dialogueDataSchemaList } = props;
  // 内部数据: 选中Schema回调(selectSchemaCallback)
  const { selectSchemaCallback } = props;
  // 列表控制数据: 数据Schema列表(dataSchemaList)
  const [dataSchemaList, setDataSchemaList] = useState<any[]>([]);
  const setter: Setter = useMemo(() => { return { setDataSchemaList };}, []);

  // 组件dataSchema数据变化触发的交互入口：初始化数据列表控制
  useEffect(() => onInitializeDataListControl(setter, dispatch, dialogueDataSchemaList), [setter, dispatch, dialogueDataSchemaList]);


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
    <DataSchemaComponent 
      dialogueDataSchemaList={dialogueDataSchemaList}
      selectSchemaCallback={selectSchemaCallback}
      dataSchemaList={dataSchemaList}
      setDataSchemaList={setDataSchemaList}
    />
  );
};

export default DataSchemaWrapper;
