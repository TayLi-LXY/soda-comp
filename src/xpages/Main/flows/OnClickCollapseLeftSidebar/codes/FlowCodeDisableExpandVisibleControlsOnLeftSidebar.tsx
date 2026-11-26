
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeDisableExpandVisibleControlsOnLeftSidebarParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeDisableExpandVisibleControlsOnLeftSidebarResults {
}

/**
 * 设置左侧边栏展开可见控制不可见
 * FLOW_NODE_DISABLE_EXPAND_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR
 * 唯一id: Main/FLOW_CODE_DISABLE_EXPAND_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR
 */
export const flowCodeDisableExpandVisibleControlsOnLeftSidebar = async (params: FlowCodeDisableExpandVisibleControlsOnLeftSidebarParams): Promise<FlowCodeDisableExpandVisibleControlsOnLeftSidebarResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setExpandVisibleControlsOnLeftSidebar(false);
  // 结束流程
  return {}
};
