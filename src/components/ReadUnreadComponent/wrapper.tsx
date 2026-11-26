'use client';
import React, { useState } from 'react';
import type { ReadUnreadComponentWrapperProps } from './types';
import ReadUnreadComponentComponent from './index';


/**
 * 组件逻辑: 已读未读组件
 */
const ReadUnreadComponentWrapper: React.FC<ReadUnreadComponentWrapperProps> = () => {
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
  // 可见控制数据: 未读可见控制(unreadVisibleControl)
  const [unreadVisibleControl, setUnreadVisibleControl] = useState<boolean>(false);
  // 可见控制数据: 已读可见控制(readVisibleControl)
  const [readVisibleControl, setReadVisibleControl] = useState<boolean>(true);

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
    <ReadUnreadComponentComponent 
      unreadVisibleControl={unreadVisibleControl}
      setUnreadVisibleControl={setUnreadVisibleControl}
      readVisibleControl={readVisibleControl}
      setReadVisibleControl={setReadVisibleControl}
    />
  );
};

export default ReadUnreadComponentWrapper;
