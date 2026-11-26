

export type Setter = {
  // 登录面板可见控制设置
  setVisibleControlInLoginPanel: React.Dispatch<React.SetStateAction<boolean>>;
  // 账号登录可见控制设置
  setAccountLoginVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 图形验证码base64设置
  setGraphicCaptchaBaseImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 图形验证码文本设置
  setGraphicCaptchaText: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 图形验证码刷新信号设置
  setGraphicCaptchaRefreshSignal: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 验证码登录可见控制设置
  setVerificationCodeLoginVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 倒计时数据设置
  setCountdownData: React.Dispatch<React.SetStateAction<string>>;
  // 按钮失效设置
  setButtonDisable: React.Dispatch<React.SetStateAction<boolean>>;
  // 微信登录面板可见控制设置
  setWeChatLoginPanelVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // google登录面板可见控制设置
  setGoogleLoginPanelVisibleControls: React.Dispatch<React.SetStateAction<boolean>>;
};