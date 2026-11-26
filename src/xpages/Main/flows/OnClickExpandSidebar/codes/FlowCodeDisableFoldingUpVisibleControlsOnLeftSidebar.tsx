
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeDisableFoldingUpVisibleControlsOnLeftSidebarParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeDisableFoldingUpVisibleControlsOnLeftSidebarResults {
}

/**
 * 设置左侧边栏收起可见控制不可见
 * FLOW_NODE_DISABLE_FOLDING_UP_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR
 * 唯一id: Main/FLOW_CODE_DISABLE_FOLDING_UP_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR
 */
export const flowCodeDisableFoldingUpVisibleControlsOnLeftSidebar = async (params: FlowCodeDisableFoldingUpVisibleControlsOnLeftSidebarParams): Promise<FlowCodeDisableFoldingUpVisibleControlsOnLeftSidebarResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setFoldingUpVisibleControlsOnLeftSidebar(false);
  // 结束流程
  return {}
};
