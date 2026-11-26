'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { TestPageWrapperProps } from './types';
import { eventsInitializeAGGRIdComponent, onInitializeAGGRId } from './actions';
import type { Setter } from './setter';
import TestPagePage from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 测试页面
 */
const TestPageWrapper: React.FC<TestPageWrapperProps> = () => {
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
  // 内部可变数据: 文件地址(documents)
  const [documents, setDocuments] = useState<string[] | undefined>([
'https://pdfobject.com/pdf/sample.pdf',
]);
  // 可见控制数据: 文件预览可见控制(filePreviewVisibleControl)
  const [filePreviewVisibleControl, setFilePreviewVisibleControl] = useState<boolean>(false);
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
  // 可见控制数据: aggrid可见控制(aggridVisibleControl)
  const [aggridVisibleControl, setAggridVisibleControl] = useState<boolean>(false);
  // 可见控制数据: grid可见控制(gridVisibleControl)
  const [gridVisibleControl, setGridVisibleControl] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setDocuments, setFilePreviewVisibleControl, setRowData, setColumnDefs, setOnRowClicked, setOnSelectionChanged, setOnGridReady, setAggridVisibleControl, setGridVisibleControl };}, []);
  const actions = {
    // 组件initializeAGGRIdComponent事件响应触发的交互入口
    eventsInitializeAGGRIdComponent: useMemo(() => eventsInitializeAGGRIdComponent(setter, dispatch), [setter, dispatch]),
  };

  // 组件initializeAGGRId数据变化触发的交互入口：初始化AGGRID
  useEffect(() => onInitializeAGGRId(setter, dispatch), [setter, dispatch]);


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

  // 数据表格: 列定义
  const [gridColumnDefs] = useState<any[]>([
    { field: 'athlete' },
    { field: 'age' },
    { field: 'country' },
    { field: 'sport' },
    { field: 'year' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ]);

  // 数据表格: 行数据
  const [gridRowData, setGridRowData] = useState<any[]>([]);

  // 数据表格: 加载远程数据
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((res) => res.json())
      .then((data) => setGridRowData(data.slice(0, 50))); // 取前50条
  }, []);

  // 数据表格: 行点击回调
  const handleRowClicked = (event: any) => {
    console.log('点击行:', event.data);
  };

  // 数据表格: 选中变化回调
  const handleSelectionChanged = (event: any) => {
    const selected = event.api.getSelectedRows();
    console.log('选中行:', selected);
  };

  /*
   * [END OF YOUR CODE]
   */
  return (
    <TestPagePage
      documents={documents}
      setDocuments={setDocuments}
      filePreviewVisibleControl={filePreviewVisibleControl}
      setFilePreviewVisibleControl={setFilePreviewVisibleControl}
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
      aggridVisibleControl={aggridVisibleControl}
      setAggridVisibleControl={setAggridVisibleControl}
      gridVisibleControl={gridVisibleControl}
      setGridVisibleControl={setGridVisibleControl}
      actions={actions}
    />
  );
};

export default TestPageWrapper;
