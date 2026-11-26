'use client';
import React, { useEffect } from 'react';
import type { HorsecoderPermissionLayoutWrapperProps } from './types';
import { initialOrganizeAccountPermissionListGlobalData } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import type { LayoutState } from '@/models/connect';
import HorsecoderPermissionLayoutLayout from './index';


/**
 * 组件逻辑: 倚码权限布局
 */
const HorsecoderPermissionLayoutWrapper: React.FC<HorsecoderPermissionLayoutWrapperProps> = (props) => {
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
  // 全局数据: 组织账户权限列表(organizeAccountPermissionList)
  const organizeAccountPermissionList = useSelector((state: LayoutState) => state.HorsecoderPermissionLayout.layout.organizeAccountPermissionList);

  // 组件div数据变化触发的交互入口：初始化组织账户权限列表全局数据
  useEffect(() => initialOrganizeAccountPermissionListGlobalData(dispatch), [dispatch]);


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
    <HorsecoderPermissionLayoutLayout 
      children={children}
      organizeAccountPermissionList={organizeAccountPermissionList}
    />
  );
};

export default HorsecoderPermissionLayoutWrapper;
