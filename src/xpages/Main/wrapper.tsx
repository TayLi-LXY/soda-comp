'use client';
import React, { useMemo } from 'react';
import type { MainWrapperProps } from './types';
import { eventsUpgradePlan } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import type { PageState, LayoutState } from '@/models/connect';
import MainPage from './index';


/**
 * 组件逻辑: 主页
 */
const MainWrapper: React.FC<MainWrapperProps> = () => {
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
  // 全局数据: 可见控制信号数据(visibleControlSignalData)
  const visibleControlSignalData = useSelector((state: PageState) => state.Main.page.visibleControlSignalData);
  // 内部数据: 登录用户(loggedinUser)
  const loggedinUser = useSelector((state: LayoutState) => state.EmptyLayout.layout.loggedinUser);
  // 全局数据: 升级套餐可见控制(upgradePlanVisible)
  const upgradePlanVisible = useSelector((state: PageState) => state.Main.page.upgradePlanVisible);
  const actions = {
    // 组件upgradePlan事件响应触发的交互入口
    eventsUpgradePlan: useMemo(() => eventsUpgradePlan(dispatch), [dispatch]),
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
    <MainPage
      visibleControlSignalData={visibleControlSignalData}
      loggedinUser={loggedinUser}
      upgradePlanVisible={upgradePlanVisible}
      actions={actions}
    />
  );
};

export default MainWrapper;
