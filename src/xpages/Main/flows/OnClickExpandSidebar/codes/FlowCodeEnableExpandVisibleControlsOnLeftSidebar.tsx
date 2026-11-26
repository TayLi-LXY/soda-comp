
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeEnableExpandVisibleControlsOnLeftSidebarParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeEnableExpandVisibleControlsOnLeftSidebarResults {
}

/**
 * 设置左侧边栏展开可见控制可见
 * FLOW_NODE_ENABLE_EXPAND_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR
 * 唯一id: Main/FLOW_CODE_ENABLE_EXPAND_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR
 */
export const flowCodeEnableExpandVisibleControlsOnLeftSidebar = async (params: FlowCodeEnableExpandVisibleControlsOnLeftSidebarParams): Promise<FlowCodeEnableExpandVisibleControlsOnLeftSidebarResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setExpandVisibleControlsOnLeftSidebar(true);
  // 结束流程
  return {}
};
