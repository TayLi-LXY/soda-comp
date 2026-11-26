'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { RegisterWrapperProps } from './types';
import { eventsImageCaptchaButton, eventsMobileVerificationCodeSendButton, eventsRegisterButton, eventsLoginJumpButton, eventsWeChatRegistrationButton, onInitializeGraphicCaptcha } from './actions';
import { Form } from 'antd';
import type { Setter } from './setter';
import RegisterPage from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 注册
 */
const RegisterWrapper: React.FC<RegisterWrapperProps> = () => {
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
  // 可见控制数据: 登录面板可见控制(visibleControlInLoginPanel)
  const [visibleControlInLoginPanel, setVisibleControlInLoginPanel] = useState<boolean>(true);
  // 可见控制数据: 手机验证表单可见控制(mobileVerificationFormVisibleControl)
  const [mobileVerificationFormVisibleControl, setMobileVerificationFormVisibleControl] = useState<boolean>(true);
  // 内部数据: 注册手机验证表单(registrationMobileVerificationForm)
  const [registrationMobileVerificationForm] = Form.useForm();
  // 内部可变数据: 图形验证码(graphicalVerificationCode)
  const [graphicalVerificationCode, setGraphicalVerificationCode] = useState<string | undefined>(undefined);
  // 内部可变数据: 图形验证码刷新信号(graphicCaptchaRefreshSignal)
  const [graphicCaptchaRefreshSignal, setGraphicCaptchaRefreshSignal] = useState<string | undefined>(undefined);
  // 内部可变数据: 图形验证码base64(graphicCaptchaImage)
  const [graphicCaptchaImage, setGraphicCaptchaImage] = useState<string | undefined>(undefined);
  // 内部可变数据: 倒计时数据(countdownData)
  const [countdownData, setCountdownData] = useState<string>('获取验证码');
  // 内部可变数据: 按钮失效(buttonDisable)
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  // 可见控制数据: 其他登录方式可见控制(otherLoginMethodsVisibleControl)
  const [otherLoginMethodsVisibleControl, setOtherLoginMethodsVisibleControl] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setVisibleControlInLoginPanel, setMobileVerificationFormVisibleControl, setGraphicalVerificationCode, setGraphicCaptchaRefreshSignal, setGraphicCaptchaImage, setCountdownData, setButtonDisable, setOtherLoginMethodsVisibleControl };}, []);
  const actions = {
    // 组件imageCaptchaButton事件响应触发的交互入口
    eventsImageCaptchaButton: useMemo(() => eventsImageCaptchaButton(setter, dispatch), [setter, dispatch]),
    // 组件mobileVerificationCodeSendButton事件响应触发的交互入口
    eventsMobileVerificationCodeSendButton: useMemo(() => eventsMobileVerificationCodeSendButton(setter, dispatch, graphicalVerificationCode, registrationMobileVerificationForm), [setter, dispatch, graphicalVerificationCode, registrationMobileVerificationForm]),
    // 组件registerButton事件响应触发的交互入口
    eventsRegisterButton: useMemo(() => eventsRegisterButton(setter, dispatch, registrationMobileVerificationForm), [setter, dispatch, registrationMobileVerificationForm]),
    // 组件loginJumpButton事件响应触发的交互入口
    eventsLoginJumpButton: useMemo(() => eventsLoginJumpButton(setter, dispatch), [setter, dispatch]),
    // 组件weChatRegistrationButton事件响应触发的交互入口
    eventsWeChatRegistrationButton: useMemo(() => eventsWeChatRegistrationButton(setter, dispatch), [setter, dispatch]),
  };

  // 组件registrationPage数据变化触发的交互入口：初始化图形验证码
  useEffect(() => onInitializeGraphicCaptcha(setter, dispatch, graphicCaptchaRefreshSignal), [setter, dispatch, graphicCaptchaRefreshSignal]);


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
    <RegisterPage 
      visibleControlInLoginPanel={visibleControlInLoginPanel}
      setVisibleControlInLoginPanel={setVisibleControlInLoginPanel}
      mobileVerificationFormVisibleControl={mobileVerificationFormVisibleControl}
      setMobileVerificationFormVisibleControl={setMobileVerificationFormVisibleControl}
      registrationMobileVerificationForm={registrationMobileVerificationForm}
      graphicalVerificationCode={graphicalVerificationCode}
      setGraphicalVerificationCode={setGraphicalVerificationCode}
      graphicCaptchaRefreshSignal={graphicCaptchaRefreshSignal}
      setGraphicCaptchaRefreshSignal={setGraphicCaptchaRefreshSignal}
      graphicCaptchaImage={graphicCaptchaImage}
      setGraphicCaptchaImage={setGraphicCaptchaImage}
      countdownData={countdownData}
      setCountdownData={setCountdownData}
      buttonDisable={buttonDisable}
      setButtonDisable={setButtonDisable}
      otherLoginMethodsVisibleControl={otherLoginMethodsVisibleControl}
      setOtherLoginMethodsVisibleControl={setOtherLoginMethodsVisibleControl}
      actions={actions}
    />
  );
};

export default RegisterWrapper;
