'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { PaymentWrapperProps } from './types';
import { eventsBackButton, eventsWeChatPayButton, eventsAlipayPaymentButton, eventsCancelPaymentButton, eventsPaymentButtonCompleted, onInitializeWeChatPayOrder, onInitializeOrderCardBasedOnOrderNumber } from './actions';
import type { LayoutState } from '@/models/connect';
import type { Setter } from './setter';
import PaymentPage from './index';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';


/**
 * 组件逻辑: 支付页
 */
const PaymentWrapper: React.FC<PaymentWrapperProps> = (props) => {
  /*
   * 前置代码数据区域
   * 自定义代码区域
   * [YOUR CODE HERE]
   */

  // 从 URL 获取订单号和用户ID
  const searchParams = useSearchParams();
  const orderNumberFromURL = searchParams.get('orderNumber') ?? '';
  const paymentAccountIdFromURL = searchParams.get('userId') ?? '';
    // 内部数据: 订单号(orderNumber) - 优先使用 URL 参数
  const orderNumber = props.orderNumber || orderNumberFromURL;
  // 内部数据: 支付账户ID(paymentAccountId) - 优先使用 URL 参数
  const paymentAccountId = props.paymentAccountId || paymentAccountIdFromURL;

  /*
   * [END OF YOUR CODE]
   */
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  const dispatch = useDispatch();
  // 内部可变数据: 支付地址(paymentAddress)
  const [paymentAddress, setPaymentAddress] = useState<string | undefined>(undefined);
  // // 内部数据: 订单号(orderNumber) - 优先使用 URL 参数
  // const orderNumber = props.orderNumber || orderNumberFromURL;
  // // 内部数据: 支付账户ID(paymentAccountId) - 优先使用 URL 参数
  // const paymentAccountId = props.paymentAccountId || paymentAccountIdFromURL;
  // 内部数据: 重定向url(redirectURL)
  const { redirectURL } = props;
  // 内部可变数据: 是否选择支付方式(selectPaymentMethod)
  const [selectPaymentMethod, setSelectPaymentMethod] = useState<boolean>(false);
  // 内部数据: 支付完成回调(paymentCompletionCallback)
  const { paymentCompletionCallback } = props;
  // 内部数据: 登录用户(loggedinUser)
  const loggedinUser = useSelector((state: LayoutState) => state.EmptyLayout.layout.loggedinUser);
  // 内部可变数据: 套餐名称(comboName)
  const [comboName, setComboName] = useState<string | undefined>(undefined);
  // 内部可变数据: 套餐简介(packageIntroduction)
  const [packageIntroduction, setPackageIntroduction] = useState<string | undefined>('先进AI+BI技术的更高使用权限');
  // 内部可变数据: 套餐权益(packageBenefits)
  const [packageBenefits, setPackageBenefits] = useState<string | undefined>(undefined);
  // 内部可变数据: 套餐价格(setMealPrice)
  const [setMealPrice, setSetMealPrice] = useState<number | undefined>(undefined);
  // 内部可变数据: 促销金额(promotionAmount)
  const [promotionAmount, setPromotionAmount] = useState<number | undefined>(undefined);
  // 内部可变数据: 应付金额(amountPayable)
  const [amountPayable, setAmountPayable] = useState<bigdecimal>(undefined);
  // 可见控制数据: 支付二维码可见控制(visibleControlOfPaymentQRCode)
  const [visibleControlOfPaymentQRCode, setVisibleControlOfPaymentQRCode] = useState<boolean>(false);
  // 内部可变数据: 支付二维码二维码扫描内容(paymentQRCodeCodeContent)
  const [paymentQRCodeCodeContent, setPaymentQRCodeCodeContent] = useState<string>('');
  // 内部可变数据: 支付二维码二维码生成级别(paymentQRCodeLevel)
  const [paymentQRCodeLevel, setPaymentQRCodeLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  // 内部可变数据: 支付二维码logo图片(paymentQRCodeLogoImage)
  const [paymentQRCodeLogoImage, setPaymentQRCodeLogoImage] = useState<string | undefined>(undefined);
  // 内部可变数据: 支付二维码logo宽度(paymentQRCodeLogoWidth)
  const [paymentQRCodeLogoWidth, setPaymentQRCodeLogoWidth] = useState<number | undefined>(10);
  // 内部可变数据: 支付二维码logo高度(paymentQRCodeLogoHeight)
  const [paymentQRCodeLogoHeight, setPaymentQRCodeLogoHeight] = useState<number | undefined>(10);
  // 内部可变数据: 支付二维码二维码尺寸(paymentQRCodeQrCodeSize)
  const [paymentQRCodeQrCodeSize, setPaymentQRCodeQrCodeSize] = useState<number | undefined>(120);
  // 内部可变数据: 支付二维码二维码密度(paymentQRCodeQRCodeDensity)
  const [paymentQRCodeQRCodeDensity, setPaymentQRCodeQRCodeDensity] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  // 内部可变数据: 支付二维码logo透明度(paymentQRCodeLogoOpacity)
  const [paymentQRCodeLogoOpacity, setPaymentQRCodeLogoOpacity] = useState<number | undefined>(1);
  // 内部可变数据: 支付二维码是否移除logo遮挡部分二维码(paymentQRCodeRemoveQrCodeBehindLogo)
  const [paymentQRCodeRemoveQrCodeBehindLogo, setPaymentQRCodeRemoveQrCodeBehindLogo] = useState<boolean | undefined>(true);
  // 内部可变数据: 支付提示(paymentReminder)
  const [paymentReminder, setPaymentReminder] = useState<string>('请使用微信支付');
  const setter: Setter = useMemo(() => { return { setPaymentAddress, setSelectPaymentMethod, setComboName, setPackageIntroduction, setPackageBenefits, setSetMealPrice, setPromotionAmount, setAmountPayable, setVisibleControlOfPaymentQRCode, setPaymentQRCodeCodeContent, setPaymentQRCodeLevel, setPaymentQRCodeLogoImage, setPaymentQRCodeLogoWidth, setPaymentQRCodeLogoHeight, setPaymentQRCodeQrCodeSize, setPaymentQRCodeQRCodeDensity, setPaymentQRCodeLogoOpacity, setPaymentQRCodeRemoveQrCodeBehindLogo, setPaymentReminder };}, []);
  const actions = {
    // 组件backButton事件响应触发的交互入口
    eventsBackButton: useMemo(() => eventsBackButton(setter, dispatch), [setter, dispatch]),
    // 组件weChatPayButton事件响应触发的交互入口
    eventsWeChatPayButton: useMemo(() => eventsWeChatPayButton(setter, dispatch, orderNumber, paymentAccountId), [setter, dispatch, orderNumber, paymentAccountId]),
    // 组件alipayPaymentButton事件响应触发的交互入口
    eventsAlipayPaymentButton: useMemo(() => eventsAlipayPaymentButton(setter, dispatch, orderNumber, paymentAccountId), [setter, dispatch, orderNumber, paymentAccountId]),
    // 组件cancelPaymentButton事件响应触发的交互入口
    eventsCancelPaymentButton: useMemo(() => eventsCancelPaymentButton(setter, dispatch, orderNumber, paymentAccountId), [setter, dispatch, orderNumber, paymentAccountId]),
    // 组件paymentButtonCompleted事件响应触发的交互入口
    eventsPaymentButtonCompleted: useMemo(() => eventsPaymentButtonCompleted(setter, dispatch, redirectURL, orderNumber, selectPaymentMethod, paymentCompletionCallback, paymentAccountId), [setter, dispatch, redirectURL, orderNumber, selectPaymentMethod, paymentCompletionCallback, paymentAccountId]),
  };

  // 组件theOutermostContainerOfPaymentPage数据变化触发的交互入口：初始化支付订单
  // useEffect(() => onInitializeWeChatPayOrder(setter, dispatch, orderNumber, paymentAccountId), [setter, dispatch, orderNumber, paymentAccountId]);
  // 组件initializeOrderCard数据变化触发的交互入口：根据订单号初始化订单卡片
  useEffect(() => onInitializeOrderCardBasedOnOrderNumber(setter, dispatch, orderNumber, paymentAccountId), [setter, dispatch, orderNumber, paymentAccountId]);


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



  // const actions = {
  //   // 组件backButton事件响应触发的交互入口
  //   eventsBackButton: useMemo(() => eventsBackButton(setter, dispatch), [setter, dispatch]),
  //   // 组件weChatPayButton事件响应触发的交互入口
  //   eventsWeChatPayButton: useMemo(() => eventsWeChatPayButton(setter, dispatch), [setter, dispatch]),
  //   // 组件alipayPaymentButton事件响应触发的交互入口
  //   eventsAlipayPaymentButton: useMemo(() => eventsAlipayPaymentButton(setter, dispatch), [setter, dispatch]),
  //   // 组件paymentButtonCompleted事件响应触发的交互入口
  //   eventsPaymentButtonCompleted: useMemo(() => eventsPaymentButtonCompleted(setter, dispatch, redirectURL, orderNumber, selectPaymentMethod, paymentCompletionCallback), [setter, dispatch, redirectURL, orderNumber, selectPaymentMethod, paymentCompletionCallback]),
  // };

  // 组件theOutermostContainerOfPaymentPage数据变化触发的交互入口：初始化微信支付订单
  useEffect(() => onInitializeWeChatPayOrder(setter, dispatch, orderNumber, paymentAccountId), [setter, dispatch, orderNumber, paymentAccountId]);

  /*
   * [END OF YOUR CODE]
   */
  return (
    <PaymentPage
      paymentAddress={paymentAddress}
      setPaymentAddress={setPaymentAddress}
      orderNumber={orderNumber}
      paymentAccountId={paymentAccountId}
      redirectURL={redirectURL}
      selectPaymentMethod={selectPaymentMethod}
      setSelectPaymentMethod={setSelectPaymentMethod}
      paymentCompletionCallback={paymentCompletionCallback}
      loggedinUser={loggedinUser}
      comboName={comboName}
      setComboName={setComboName}
      packageIntroduction={packageIntroduction}
      setPackageIntroduction={setPackageIntroduction}
      packageBenefits={packageBenefits}
      setPackageBenefits={setPackageBenefits}
      setMealPrice={setMealPrice}
      setSetMealPrice={setSetMealPrice}
      promotionAmount={promotionAmount}
      setPromotionAmount={setPromotionAmount}
      amountPayable={amountPayable}
      setAmountPayable={setAmountPayable}
      visibleControlOfPaymentQRCode={visibleControlOfPaymentQRCode}
      setVisibleControlOfPaymentQRCode={setVisibleControlOfPaymentQRCode}
      paymentQRCodeCodeContent={paymentQRCodeCodeContent}
      setPaymentQRCodeCodeContent={setPaymentQRCodeCodeContent}
      paymentQRCodeLevel={paymentQRCodeLevel}
      setPaymentQRCodeLevel={setPaymentQRCodeLevel}
      paymentQRCodeLogoImage={paymentQRCodeLogoImage}
      setPaymentQRCodeLogoImage={setPaymentQRCodeLogoImage}
      paymentQRCodeLogoWidth={paymentQRCodeLogoWidth}
      setPaymentQRCodeLogoWidth={setPaymentQRCodeLogoWidth}
      paymentQRCodeLogoHeight={paymentQRCodeLogoHeight}
      setPaymentQRCodeLogoHeight={setPaymentQRCodeLogoHeight}
      paymentQRCodeQrCodeSize={paymentQRCodeQrCodeSize}
      setPaymentQRCodeQrCodeSize={setPaymentQRCodeQrCodeSize}
      paymentQRCodeQRCodeDensity={paymentQRCodeQRCodeDensity}
      setPaymentQRCodeQRCodeDensity={setPaymentQRCodeQRCodeDensity}
      paymentQRCodeLogoOpacity={paymentQRCodeLogoOpacity}
      setPaymentQRCodeLogoOpacity={setPaymentQRCodeLogoOpacity}
      paymentQRCodeRemoveQrCodeBehindLogo={paymentQRCodeRemoveQrCodeBehindLogo}
      setPaymentQRCodeRemoveQrCodeBehindLogo={setPaymentQRCodeRemoveQrCodeBehindLogo}
      paymentReminder={paymentReminder}
      setPaymentReminder={setPaymentReminder}
      actions={actions}
    />
  );
};

export default PaymentWrapper;
