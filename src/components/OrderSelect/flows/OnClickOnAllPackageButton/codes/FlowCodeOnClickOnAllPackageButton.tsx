
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnClickOnAllPackageButtonParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickOnAllPackageButtonResults {
}

/**
 * 点击全部套餐按钮
 * FLOW_NODE_ON_CLICK_ON_ALL_PACKAGE_BUTTON
 * 唯一id: OrderSelect/FLOW_CODE_ON_CLICK_ON_ALL_PACKAGE_BUTTON
 */
export const flowCodeOnClickOnAllPackageButton = async (params: FlowCodeOnClickOnAllPackageButtonParams): Promise<FlowCodeOnClickOnAllPackageButtonResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;

  setter.setAllPackageButtonsAreVisible(false);
  setter.setToggleButton(true);
  setter.setMaxVisible(true);
  setter.setUltraVisible(true);
  // 结束流程
  return {}
};
