

export type Setter = {
  // 支付订单号设置
  setPaymentOrderNumber: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 免费版可见设置
  setFreeVersionVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // pro可见设置
  setProVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // max可见设置
  setMaxVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // Ultra可见设置
  setUltraVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // business可见设置
  setBusinessVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // 订单提示可见控制设置
  setOrderPromptVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 全部套餐按钮可见设置
  setAllPackageButtonsAreVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // 切换按钮设置
  setToggleButton: React.Dispatch<React.SetStateAction<boolean>>;
  // FQA可见控制设置
  setFQAVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
};