
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnClickDisplayPersonalPackageParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickDisplayPersonalPackageResults {
}

/**
 * 点击显示个人套餐
 * FLOW_NODE_ON_CLICK_DISPLAY_PERSONAL_PACKAGE
 * 唯一id: OrderSelect/FLOW_CODE_ON_CLICK_DISPLAY_PERSONAL_PACKAGE
 */
export const flowCodeOnClickDisplayPersonalPackage = async (params: FlowCodeOnClickDisplayPersonalPackageParams): Promise<FlowCodeOnClickDisplayPersonalPackageResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;

  setter.setProVisible(true);
  setter.setMaxVisible(true);
  setter.setUltraVisible(true);
  setter.setBusinessVisible(false);
  // 结束流程
  return {}
};
