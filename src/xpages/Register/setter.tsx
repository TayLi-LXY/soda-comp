

export type Setter = {
  // 登录面板可见控制设置
  setVisibleControlInLoginPanel: React.Dispatch<React.SetStateAction<boolean>>;
  // 手机验证表单可见控制设置
  setMobileVerificationFormVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 图形验证码设置
  setGraphicalVerificationCode: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 图形验证码刷新信号设置
  setGraphicCaptchaRefreshSignal: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 图形验证码base64设置
  setGraphicCaptchaImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 倒计时数据设置
  setCountdownData: React.Dispatch<React.SetStateAction<string>>;
  // 按钮失效设置
  setButtonDisable: React.Dispatch<React.SetStateAction<boolean>>;
  // 其他登录方式可见控制设置
  setOtherLoginMethodsVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
};