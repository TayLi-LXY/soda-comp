
/**
 * 入参明细:
 * setter 页面设置器
 * graphicalVerificationCode 图形验证码
 */
export interface FlowCodeSetGraphicalVerificationCodeParams {
  setter: any;
  graphicalVerificationCode: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetGraphicalVerificationCodeResults {
}

/**
 * 设置数据:图形验证码
 * FLOW_NODE_SET_GRAPHICAL_VERIFICATION_CODE
 * 唯一id: Register/FLOW_CODE_SET_GRAPHICAL_VERIFICATION_CODE
 */
export const flowCodeSetGraphicalVerificationCode = async (params: FlowCodeSetGraphicalVerificationCodeParams): Promise<FlowCodeSetGraphicalVerificationCodeResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { graphicalVerificationCode } = params;
  setter.setGraphicalVerificationCode(graphicalVerificationCode);
  // 结束流程
  return {}
};
