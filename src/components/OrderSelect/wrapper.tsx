'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { OrderSelectWrapperProps } from './types';
import { eventsFreeClaimButton, eventsRefuelingAndPaymentImmediately, eventsPromptCancelOrderButton, eventsOrderContinuePaymentButton, eventsAllPackageButton, eventsPersonalPackageButton, eventsEnterprisePackageButton, onInitializeOrderSelectPage } from './actions';
import type { LayoutState } from '@/models/connect';
import type { Setter } from './setter';
import OrderSelectComponent from './index';
import { useDispatch, useSelector } from 'react-redux';


/**
 * 组件逻辑: 订单选择
 */
const OrderSelectWrapper: React.FC<OrderSelectWrapperProps> = () => {
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
  // 内部数据: 登录用户(loggedinUser)
  const loggedinUser = useSelector((state: LayoutState) => state.EmptyLayout.layout.loggedinUser);
  // 内部数据: 会员类型(memberType)
  const memberType = useSelector((state: LayoutState) => state.EmptyLayout.layout.memberType);
  // 内部可变数据: 支付订单号(paymentOrderNumber)
  const [paymentOrderNumber, setPaymentOrderNumber] = useState<string | undefined>('');
  // 可见控制数据: 免费版可见(freeVersionVisible)
  const [freeVersionVisible, setFreeVersionVisible] = useState<boolean>(true);
  // 可见控制数据: pro可见(proVisible)
  const [proVisible, setProVisible] = useState<boolean>(true);
  // 可见控制数据: max可见(maxVisible)
  const [maxVisible, setMaxVisible] = useState<boolean>(true);
  // 可见控制数据: Ultra可见(ultraVisible)
  const [ultraVisible, setUltraVisible] = useState<boolean>(false);
  // 可见控制数据: business可见(businessVisible)
  const [businessVisible, setBusinessVisible] = useState<boolean>(false);
  // 可见控制数据: 订单提示可见控制(orderPromptVisibleControl)
  const [orderPromptVisibleControl, setOrderPromptVisibleControl] = useState<boolean>(false);
  // 可见控制数据: 全部套餐按钮可见(allPackageButtonsAreVisible)
  const [allPackageButtonsAreVisible, setAllPackageButtonsAreVisible] = useState<boolean>(false);
  // 可见控制数据: 切换按钮(toggleButton)
  const [toggleButton, setToggleButton] = useState<boolean>(false);
  // 可见控制数据: FQA可见控制(fQAVisibleControl)
  const [fQAVisibleControl, setFQAVisibleControl] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setPaymentOrderNumber, setFreeVersionVisible, setProVisible, setMaxVisible, setUltraVisible, setBusinessVisible, setOrderPromptVisibleControl, setAllPackageButtonsAreVisible, setToggleButton, setFQAVisibleControl };}, []);
  const actions = {
    // 组件freeClaimButton事件响应触发的交互入口
    eventsFreeClaimButton: useMemo(() => eventsFreeClaimButton(setter, dispatch, loggedinUser, memberType), [setter, dispatch, loggedinUser, memberType]),
    // 组件refuelingAndPaymentImmediately事件响应触发的交互入口
    eventsRefuelingAndPaymentImmediately: useMemo(() => eventsRefuelingAndPaymentImmediately(setter, dispatch, loggedinUser, memberType), [setter, dispatch, loggedinUser, memberType]),
    // 组件promptCancelOrderButton事件响应触发的交互入口
    eventsPromptCancelOrderButton: useMemo(() => eventsPromptCancelOrderButton(setter, dispatch, loggedinUser, paymentOrderNumber), [setter, dispatch, loggedinUser, paymentOrderNumber]),
    // 组件orderContinuePaymentButton事件响应触发的交互入口
    eventsOrderContinuePaymentButton: useMemo(() => eventsOrderContinuePaymentButton(setter, dispatch, paymentOrderNumber, memberType, loggedinUser), [setter, dispatch, paymentOrderNumber, memberType, loggedinUser]),
    // 组件allPackageButton事件响应触发的交互入口
    eventsAllPackageButton: useMemo(() => eventsAllPackageButton(setter, dispatch), [setter, dispatch]),
    // 组件personalPackageButton事件响应触发的交互入口
    eventsPersonalPackageButton: useMemo(() => eventsPersonalPackageButton(setter, dispatch), [setter, dispatch]),
    // 组件enterprisePackageButton事件响应触发的交互入口
    eventsEnterprisePackageButton: useMemo(() => eventsEnterprisePackageButton(setter, dispatch), [setter, dispatch]),
  };

  // 组件orderSelectContainer数据变化触发的交互入口：初始化订单选择页面
  useEffect(() => onInitializeOrderSelectPage(setter, dispatch, loggedinUser, memberType), [setter, dispatch, loggedinUser, memberType]);


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
    <OrderSelectComponent 
      loggedinUser={loggedinUser}
      memberType={memberType}
      paymentOrderNumber={paymentOrderNumber}
      setPaymentOrderNumber={setPaymentOrderNumber}
      freeVersionVisible={freeVersionVisible}
      setFreeVersionVisible={setFreeVersionVisible}
      proVisible={proVisible}
      setProVisible={setProVisible}
      maxVisible={maxVisible}
      setMaxVisible={setMaxVisible}
      ultraVisible={ultraVisible}
      setUltraVisible={setUltraVisible}
      businessVisible={businessVisible}
      setBusinessVisible={setBusinessVisible}
      orderPromptVisibleControl={orderPromptVisibleControl}
      setOrderPromptVisibleControl={setOrderPromptVisibleControl}
      allPackageButtonsAreVisible={allPackageButtonsAreVisible}
      setAllPackageButtonsAreVisible={setAllPackageButtonsAreVisible}
      toggleButton={toggleButton}
      setToggleButton={setToggleButton}
      fQAVisibleControl={fQAVisibleControl}
      setFQAVisibleControl={setFQAVisibleControl}
      actions={actions}
    />
  );
};

export default OrderSelectWrapper;
