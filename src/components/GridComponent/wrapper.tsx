'use client';
import React from 'react';
import type { GridComponentWrapperProps } from './types';
import GridComponentComponent from './index';


/**
 * 组件逻辑: 数据表格组件
 */
const GridComponentWrapper: React.FC<GridComponentWrapperProps> = (props) => {
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
  // 内部数据: 表格数据(rowData)
  // const { rowData } = props;
  // // 内部数据: 列定义(columnDefs)
  // const { columnDefs } = props;
  // // 内部可变数据: 行点击回调(onRowClicked)
  // const { onRowClicked } = props;
  // // 内部可变数据: 选中变化回调(onSelectionChanged)
  // const { onSelectionChanged } = props;
  // // 内部可变数据: 表格就绪回调(onGridReady)
  // const { onGridReady } = props;

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
    <GridComponentComponent
      rowData={props.rowData ?? []}
      columnDefs={props.columnDefs ?? []}
      onRowClicked={props.onRowClicked}
      onSelectionChanged={props.onSelectionChanged}
      onGridReady={props.onGridReady}
    />
  );
};

export default GridComponentWrapper;
