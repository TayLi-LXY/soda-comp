

export type Setter = {
  // 加载中设置
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  // 登录面板可见控制设置
  setVisibleControlInLoginPanel: React.Dispatch<React.SetStateAction<boolean>>;
  // 手机验证表单可见控制设置
  setMobileVerificationFormVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 倒计时数据设置
  setCountdownData: React.Dispatch<React.SetStateAction<string>>;
  // 按钮失效设置
  setButtonDisable: React.Dispatch<React.SetStateAction<boolean>>;
};