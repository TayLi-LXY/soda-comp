'use client';
import React, { useMemo, useEffect, useState } from 'react';
import type { LogInWrapperProps } from './types';
import { eventsAccountLoginButton, eventsVerificationCodeLoginSwitchButton, eventsImageCaptchaButton, eventsAccountLogin, eventsGetSMSButton, eventsVerificationCodeLoginButton, eventsRegistrationJumpButton, eventsWeChatLoginButton, eventsGoogleLoginButton, onRefreshGraphicCaptcha } from './actions';
import { Form } from 'antd';
import type { Setter } from './setter';
import LogInPage from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 登录
 */
const LogInWrapper: React.FC<LogInWrapperProps> = () => {
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
  // 可见控制数据: 账号登录可见控制(accountLoginVisibleControl)
  const [accountLoginVisibleControl, setAccountLoginVisibleControl] = useState<boolean>(true);
  // 内部数据: 登录表单(loginForm)
  const [loginForm] = Form.useForm();
  // 内部可变数据: 图形验证码base64(graphicCaptchaBaseImage)
  const [graphicCaptchaBaseImage, setGraphicCaptchaBaseImage] = useState<string | undefined>(undefined);
  // 内部可变数据: 图形验证码文本(graphicCaptchaText)
  const [graphicCaptchaText, setGraphicCaptchaText] = useState<string | undefined>(undefined);
  // 内部可变数据: 图形验证码刷新信号(graphicCaptchaRefreshSignal)
  const [graphicCaptchaRefreshSignal, setGraphicCaptchaRefreshSignal] = useState<string | undefined>(undefined);
  // 可见控制数据: 验证码登录可见控制(verificationCodeLoginVisibleControl)
  const [verificationCodeLoginVisibleControl, setVerificationCodeLoginVisibleControl] = useState<boolean>(false);
  // 内部数据: 验证码登录表单(verificationCodeLoginForm)
  const [verificationCodeLoginForm] = Form.useForm();
  // 内部可变数据: 倒计时数据(countdownData)
  const [countdownData, setCountdownData] = useState<string>('获取验证码');
  // 内部可变数据: 按钮失效(buttonDisable)
  const [buttonDisable, setButtonDisable] = useState<boolean>(false);
  // 可见控制数据: 微信登录面板可见控制(weChatLoginPanelVisibleControl)
  const [weChatLoginPanelVisibleControl, setWeChatLoginPanelVisibleControl] = useState<boolean>(false);
  // 可见控制数据: google登录面板可见控制(googleLoginPanelVisibleControls)
  const [googleLoginPanelVisibleControls, setGoogleLoginPanelVisibleControls] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setVisibleControlInLoginPanel, setAccountLoginVisibleControl, setGraphicCaptchaBaseImage, setGraphicCaptchaText, setGraphicCaptchaRefreshSignal, setVerificationCodeLoginVisibleControl, setCountdownData, setButtonDisable, setWeChatLoginPanelVisibleControl, setGoogleLoginPanelVisibleControls };}, []);
  const actions = {
    // 组件accountLoginButton事件响应触发的交互入口
    eventsAccountLoginButton: useMemo(() => eventsAccountLoginButton(setter, dispatch), [setter, dispatch]),
    // 组件verificationCodeLoginSwitchButton事件响应触发的交互入口
    eventsVerificationCodeLoginSwitchButton: useMemo(() => eventsVerificationCodeLoginSwitchButton(setter, dispatch), [setter, dispatch]),
    // 组件imageCaptchaButton事件响应触发的交互入口
    eventsImageCaptchaButton: useMemo(() => eventsImageCaptchaButton(setter, dispatch), [setter, dispatch]),
    // 组件accountLogin事件响应触发的交互入口
    eventsAccountLogin: useMemo(() => eventsAccountLogin(setter, dispatch, loginForm, graphicCaptchaText), [setter, dispatch, loginForm, graphicCaptchaText]),
    // 组件getSMSButton事件响应触发的交互入口
    eventsGetSMSButton: useMemo(() => eventsGetSMSButton(setter, dispatch, verificationCodeLoginForm), [setter, dispatch, verificationCodeLoginForm]),
    // 组件verificationCodeLoginButton事件响应触发的交互入口
    eventsVerificationCodeLoginButton: useMemo(() => eventsVerificationCodeLoginButton(setter, dispatch, verificationCodeLoginForm), [setter, dispatch, verificationCodeLoginForm]),
    // 组件registrationJumpButton事件响应触发的交互入口
    eventsRegistrationJumpButton: useMemo(() => eventsRegistrationJumpButton(setter, dispatch), [setter, dispatch]),
    // 组件weChatLoginButton事件响应触发的交互入口
    eventsWeChatLoginButton: useMemo(() => eventsWeChatLoginButton(setter, dispatch), [setter, dispatch]),
    // 组件googleLoginButton事件响应触发的交互入口
    eventsGoogleLoginButton: useMemo(() => eventsGoogleLoginButton(setter, dispatch), [setter, dispatch]),
  };

  // 组件imageCaptchaButton数据变化触发的交互入口：刷新图形验证码
  useEffect(() => onRefreshGraphicCaptcha(setter, dispatch, graphicCaptchaRefreshSignal), [setter, dispatch, graphicCaptchaRefreshSignal]);


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
    <LogInPage 
      visibleControlInLoginPanel={visibleControlInLoginPanel}
      setVisibleControlInLoginPanel={setVisibleControlInLoginPanel}
      accountLoginVisibleControl={accountLoginVisibleControl}
      setAccountLoginVisibleControl={setAccountLoginVisibleControl}
      loginForm={loginForm}
      graphicCaptchaBaseImage={graphicCaptchaBaseImage}
      setGraphicCaptchaBaseImage={setGraphicCaptchaBaseImage}
      graphicCaptchaText={graphicCaptchaText}
      setGraphicCaptchaText={setGraphicCaptchaText}
      graphicCaptchaRefreshSignal={graphicCaptchaRefreshSignal}
      setGraphicCaptchaRefreshSignal={setGraphicCaptchaRefreshSignal}
      verificationCodeLoginVisibleControl={verificationCodeLoginVisibleControl}
      setVerificationCodeLoginVisibleControl={setVerificationCodeLoginVisibleControl}
      verificationCodeLoginForm={verificationCodeLoginForm}
      countdownData={countdownData}
      setCountdownData={setCountdownData}
      buttonDisable={buttonDisable}
      setButtonDisable={setButtonDisable}
      weChatLoginPanelVisibleControl={weChatLoginPanelVisibleControl}
      setWeChatLoginPanelVisibleControl={setWeChatLoginPanelVisibleControl}
      googleLoginPanelVisibleControls={googleLoginPanelVisibleControls}
      setGoogleLoginPanelVisibleControls={setGoogleLoginPanelVisibleControls}
      actions={actions}
    />
  );
};

export default LogInWrapper;
