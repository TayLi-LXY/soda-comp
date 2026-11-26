
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeEnableVerificationCodeLoginVisibleControlParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeEnableVerificationCodeLoginVisibleControlResults {
}

/**
 * 设置验证码登录可见控制可见
 * FLOW_NODE_ENABLE_VERIFICATION_CODE_LOGIN_VISIBLE_CONTROL
 * 唯一id: LogIn/FLOW_CODE_ENABLE_VERIFICATION_CODE_LOGIN_VISIBLE_CONTROL
 */
export const flowCodeEnableVerificationCodeLoginVisibleControl = async (params: FlowCodeEnableVerificationCodeLoginVisibleControlParams): Promise<FlowCodeEnableVerificationCodeLoginVisibleControlResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setVerificationCodeLoginVisibleControl(true);
  // 结束流程
  return {}
};
