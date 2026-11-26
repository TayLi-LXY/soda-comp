
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeDisableVerificationCodeLoginVisibleControlParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeDisableVerificationCodeLoginVisibleControlResults {
}

/**
 * 设置验证码登录可见控制不可见
 * FLOW_NODE_DISABLE_VERIFICATION_CODE_LOGIN_VISIBLE_CONTROL
 * 唯一id: LogIn/FLOW_CODE_DISABLE_VERIFICATION_CODE_LOGIN_VISIBLE_CONTROL
 */
export const flowCodeDisableVerificationCodeLoginVisibleControl = async (params: FlowCodeDisableVerificationCodeLoginVisibleControlParams): Promise<FlowCodeDisableVerificationCodeLoginVisibleControlResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setVerificationCodeLoginVisibleControl(false);
  // 结束流程
  return {}
};
