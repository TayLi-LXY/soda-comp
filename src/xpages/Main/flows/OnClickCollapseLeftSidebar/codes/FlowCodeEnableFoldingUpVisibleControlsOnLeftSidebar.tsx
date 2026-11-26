
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeEnableFoldingUpVisibleControlsOnLeftSidebarParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeEnableFoldingUpVisibleControlsOnLeftSidebarResults {
}

/**
 * 设置左侧边栏收起可见控制可见
 * FLOW_NODE_ENABLE_FOLDING_UP_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR
 * 唯一id: Main/FLOW_CODE_ENABLE_FOLDING_UP_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR
 */
export const flowCodeEnableFoldingUpVisibleControlsOnLeftSidebar = async (params: FlowCodeEnableFoldingUpVisibleControlsOnLeftSidebarParams): Promise<FlowCodeEnableFoldingUpVisibleControlsOnLeftSidebarResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setFoldingUpVisibleControlsOnLeftSidebar(true);
  // 结束流程
  return {}
};
