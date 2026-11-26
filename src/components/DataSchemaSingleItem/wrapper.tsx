'use client';
import React, { useMemo, useState } from 'react';
import type { DataSchemaSingleItemWrapperProps } from './types';
import { eventsDataSchemaSingleItem } from './actions';
import type { Setter } from './setter';
import DataSchemaSingleItemComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 数据Schema单项
 */
const DataSchemaSingleItemWrapper: React.FC<DataSchemaSingleItemWrapperProps> = (props) => {
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
  // 内部数据: 数据Schema列表单项(entity)
  const { entity } = props;
  // 内部数据: 索引(index)
  const { index } = props;
  // 内部数据: 选中Schema回调(selectSchemaCallback)
  const { selectSchemaCallback } = props;
  // 列表控制数据: schema字段列表(schemaFieldList)
  const [schemaFieldList, setSchemaFieldList] = useState<any[]>([]);
  const setter: Setter = useMemo(() => { return { setSchemaFieldList };}, []);
  const actions = {
    // 组件dataSchemaSingleItem事件响应触发的交互入口
    eventsDataSchemaSingleItem: useMemo(() => eventsDataSchemaSingleItem(setter, dispatch, entity, selectSchemaCallback), [setter, dispatch, entity, selectSchemaCallback]),
  };

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
    <DataSchemaSingleItemComponent 
      entity={entity}
      index={index}
      selectSchemaCallback={selectSchemaCallback}
      schemaFieldList={schemaFieldList}
      setSchemaFieldList={setSchemaFieldList}
      actions={actions}
    />
  );
};

export default DataSchemaSingleItemWrapper;
