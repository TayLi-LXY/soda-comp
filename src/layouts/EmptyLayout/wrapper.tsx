'use client';
import React, { useEffect } from 'react';
import type { EmptyLayoutWrapperProps } from './types';
import { onInitializeLoginUserAndWebsocketConnection } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import type { LayoutState } from '@/models/connect';
import EmptyLayoutLayout from './index';


/**
 * 组件逻辑: 空布局
 */
const EmptyLayoutWrapper: React.FC<EmptyLayoutWrapperProps> = (props) => {
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
  // 内部数据: 传递子节点(children)
  const { children } = props;
  // 全局数据: 登录用户(loggedinUser)
  const loggedinUser = useSelector((state: LayoutState) => state.EmptyLayout.layout.loggedinUser);
  // 全局数据: 会员类型(memberType)
  const memberType = useSelector((state: LayoutState) => state.EmptyLayout.layout.memberType);

  // 组件layout数据变化触发的交互入口：初始化登录用户和websocket连接
  useEffect(() => onInitializeLoginUserAndWebsocketConnection(dispatch), [dispatch]);


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
    <EmptyLayoutLayout 
      children={children}
      loggedinUser={loggedinUser}
      memberType={memberType}
    />
  );
};

export default EmptyLayoutWrapper;
