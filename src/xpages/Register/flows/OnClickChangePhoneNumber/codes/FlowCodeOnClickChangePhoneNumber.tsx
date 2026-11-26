
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeOnClickChangePhoneNumberParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickChangePhoneNumberResults {
}

/**
 * 点击更换手机号码
 * FLOW_NODE_ON_CLICK_CHANGE_PHONE_NUMBER
 * 唯一id: Register/FLOW_CODE_ON_CLICK_CHANGE_PHONE_NUMBER
 */
export const flowCodeOnClickChangePhoneNumber = async (params: FlowCodeOnClickChangePhoneNumberParams): Promise<FlowCodeOnClickChangePhoneNumberResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;

  setter.setMobileVerificationFormVisibleControl(true);

  setter.setAccountSettingsFormVisibleControl(false);

  setter.setCreateAccountStepsBarItems([{"title":"手机验证","subTitle":"","status":"process"},{"title":"账户设置","subTitle":"","status":"wait"}]);
  // 结束流程
  return {}
};
