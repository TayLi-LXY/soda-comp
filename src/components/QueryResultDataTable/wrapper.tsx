'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { QueryResultDataTableWrapperProps } from './types';
import { onInitializeTableData } from './actions';
import type { Setter } from './setter';
import QueryResultDataTableComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 查询结果数据表
 */
const QueryResultDataTableWrapper: React.FC<QueryResultDataTableWrapperProps> = (props) => {
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
  // 内部可变数据: 表格数据(rowData)
  const [rowData, setRowData] = useState<any[] | undefined>(undefined);
  // 内部可变数据: 列定义(columnDefs)
  const [columnDefs, setColumnDefs] = useState<any[] | undefined>(undefined);
  // 内部可变数据: 行点击回调(onRowClicked)
  const [onRowClicked, setOnRowClicked] = useState<(event: any) => void>(undefined);
  // 内部可变数据: 选中变化回调(onSelectionChanged)
  const [onSelectionChanged, setOnSelectionChanged] = useState<(event: any) => void>(undefined);
  // 内部可变数据: 表格就绪回调(onGridReady)
  const [onGridReady, setOnGridReady] = useState<(event: any) => void>(undefined);
  // 内部数据: 文件链接(fileUrl)
  const { fileUrl } = props;
  const setter: Setter = useMemo(() => { return { setRowData, setColumnDefs, setOnRowClicked, setOnSelectionChanged, setOnGridReady };}, []);

  // 组件queryResultContainer数据变化触发的交互入口：初始化表格数据
  useEffect(() => onInitializeTableData(setter, dispatch, fileUrl), [setter, dispatch, fileUrl]);


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
    <QueryResultDataTableComponent 
      rowData={rowData}
      setRowData={setRowData}
      columnDefs={columnDefs}
      setColumnDefs={setColumnDefs}
      onRowClicked={onRowClicked}
      setOnRowClicked={setOnRowClicked}
      onSelectionChanged={onSelectionChanged}
      setOnSelectionChanged={setOnSelectionChanged}
      onGridReady={onGridReady}
      setOnGridReady={setOnGridReady}
      fileUrl={fileUrl}
    />
  );
};

export default QueryResultDataTableWrapper;
