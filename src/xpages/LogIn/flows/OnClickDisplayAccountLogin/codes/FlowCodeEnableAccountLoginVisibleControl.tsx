
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeEnableAccountLoginVisibleControlParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeEnableAccountLoginVisibleControlResults {
}

/**
 * 设置账号登录可见控制可见
 * FLOW_NODE_ENABLE_ACCOUNT_LOGIN_VISIBLE_CONTROL
 * 唯一id: LogIn/FLOW_CODE_ENABLE_ACCOUNT_LOGIN_VISIBLE_CONTROL
 */
export const flowCodeEnableAccountLoginVisibleControl = async (params: FlowCodeEnableAccountLoginVisibleControlParams): Promise<FlowCodeEnableAccountLoginVisibleControlResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setAccountLoginVisibleControl(true);
  // 结束流程
  return {}
};
