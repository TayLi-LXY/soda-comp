'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { ScanedWrapperProps } from './types';
import { eventsGetVerificationCodeButton, eventsBindPhoneNumberButton, onObtainWeChatUserInformation } from './actions';
import { useSearchParams } from 'next/navigation';
import { Form } from 'antd';
import type { Setter } from './setter';
import ScanedPage from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 微信扫码后页面
 */
const ScanedWrapper: React.FC<ScanedWrapperProps> = () => {
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
  // 内部数据: 微信code(code)
  const searchParams = useSearchParams();
  const code = searchParams.get('code') ?? "";
  // 内部可变数据: 加载中(loading)
  const [loading, setLoading] = useState<boolean>(true);
  // 可见控制数据: 登录面板可见控制(visibleControlInLoginPanel)
  const [visibleControlInLoginPanel, setVisibleControlInLoginPanel] = useState<boolean>(true);
  // 可见控制数据: 手机验证表单可见控制(mobileVerificationFormVisibleControl)
  const [mobileVerificationFormVisibleControl, setMobileVerificationFormVisibleControl] = useState<boolean>(true);
  // 内部数据: 注册手机验证表单(registrationMobileVerificationForm)
  const [registrationMobileVerificationForm] = Form.useForm();
  // 内部可变数据: 倒计时数据(countdownData)
  const [countdownData, setCountdownData] = useState<string>('获取验证码');
  // 内部可变数据: 按钮失效(buttonDisable)
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setLoading, setVisibleControlInLoginPanel, setMobileVerificationFormVisibleControl, setCountdownData, setButtonDisable };}, []);
  const actions = {
    // 组件getVerificationCodeButton事件响应触发的交互入口
    eventsGetVerificationCodeButton: useMemo(() => eventsGetVerificationCodeButton(setter, dispatch, registrationMobileVerificationForm), [setter, dispatch, registrationMobileVerificationForm]),
    // 组件bindPhoneNumberButton事件响应触发的交互入口
    eventsBindPhoneNumberButton: useMemo(() => eventsBindPhoneNumberButton(setter, dispatch, registrationMobileVerificationForm), [setter, dispatch, registrationMobileVerificationForm]),
  };

  // 组件weChatCallbackPage数据变化触发的交互入口：获取微信用户信息
  useEffect(() => onObtainWeChatUserInformation(setter, dispatch, code), [setter, dispatch, code]);


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
    <ScanedPage 
      code={code}
      loading={loading}
      setLoading={setLoading}
      visibleControlInLoginPanel={visibleControlInLoginPanel}
      setVisibleControlInLoginPanel={setVisibleControlInLoginPanel}
      mobileVerificationFormVisibleControl={mobileVerificationFormVisibleControl}
      setMobileVerificationFormVisibleControl={setMobileVerificationFormVisibleControl}
      registrationMobileVerificationForm={registrationMobileVerificationForm}
      countdownData={countdownData}
      setCountdownData={setCountdownData}
      buttonDisable={buttonDisable}
      setButtonDisable={setButtonDisable}
      actions={actions}
    />
  );
};

export default ScanedWrapper;
