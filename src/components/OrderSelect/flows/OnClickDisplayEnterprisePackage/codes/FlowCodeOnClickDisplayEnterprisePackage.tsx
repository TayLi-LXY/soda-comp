
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnClickDisplayEnterprisePackageParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickDisplayEnterprisePackageResults {
}

/**
 * 点击显示企业套餐
 * FLOW_NODE_ON_CLICK_DISPLAY_ENTERPRISE_PACKAGE
 * 唯一id: OrderSelect/FLOW_CODE_ON_CLICK_DISPLAY_ENTERPRISE_PACKAGE
 */
export const flowCodeOnClickDisplayEnterprisePackage = async (params: FlowCodeOnClickDisplayEnterprisePackageParams): Promise<FlowCodeOnClickDisplayEnterprisePackageResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;

  setter.setProVisible(false);
  setter.setMaxVisible(false);
  setter.setUltraVisible(false);
  setter.setBusinessVisible(true);
  // 结束流程
  return {}
};
