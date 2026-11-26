
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeOnClickReturnAccountLoginParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickReturnAccountLoginResults {
}

/**
 * 点击返回账号登录
 * FLOW_NODE_ON_CLICK_RETURN_ACCOUNT_LOGIN
 * 唯一id: WeChatLogin/FLOW_CODE_ON_CLICK_RETURN_ACCOUNT_LOGIN
 */
export const flowCodeOnClickReturnAccountLogin = async (params: FlowCodeOnClickReturnAccountLoginParams): Promise<FlowCodeOnClickReturnAccountLoginResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;

  // 结束流程
  return {}
};
