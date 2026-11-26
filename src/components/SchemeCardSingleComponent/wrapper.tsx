'use client';
import React from 'react';
import type { SchemeCardSingleComponentWrapperProps } from './types';
import SchemeCardSingleComponentComponent from './index';


/**
 * 组件逻辑: 方案卡片单项组件
 */
const SchemeCardSingleComponentWrapper: React.FC<SchemeCardSingleComponentWrapperProps> = (props) => {
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
  // 内部数据: 方案卡片单项列表单项(entity)
  const { entity } = props;
  // 内部数据: 索引(index)
  const { index } = props;

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
    <SchemeCardSingleComponentComponent 
      entity={entity}
      index={index}
    />
  );
};

export default SchemeCardSingleComponentWrapper;
