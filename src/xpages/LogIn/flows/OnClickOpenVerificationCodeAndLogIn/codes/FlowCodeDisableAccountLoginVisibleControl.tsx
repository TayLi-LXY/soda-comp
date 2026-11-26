
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeDisableAccountLoginVisibleControlParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeDisableAccountLoginVisibleControlResults {
}

/**
 * 设置账号登录可见控制不可见
 * FLOW_NODE_DISABLE_ACCOUNT_LOGIN_VISIBLE_CONTROL
 * 唯一id: LogIn/FLOW_CODE_DISABLE_ACCOUNT_LOGIN_VISIBLE_CONTROL
 */
export const flowCodeDisableAccountLoginVisibleControl = async (params: FlowCodeDisableAccountLoginVisibleControlParams): Promise<FlowCodeDisableAccountLoginVisibleControlResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setAccountLoginVisibleControl(false);
  // 结束流程
  return {}
};
