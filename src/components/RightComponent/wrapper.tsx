'use client';
import React, { useMemo } from 'react';
import type { RightComponentWrapperProps } from './types';
import { eventsRightComponentDiv1 } from './actions';
import RightComponentComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 右侧组件
 */
const RightComponentWrapper: React.FC<RightComponentWrapperProps> = () => {
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
  const actions = {
    // 组件rightComponentDiv1事件响应触发的交互入口
    eventsRightComponentDiv1: useMemo(() => eventsRightComponentDiv1(dispatch), [dispatch]),
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
    <RightComponentComponent 
      actions={actions}
    />
  );
};

export default RightComponentWrapper;
