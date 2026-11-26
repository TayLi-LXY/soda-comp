
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnClickCollapseLeftSidebarParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickCollapseLeftSidebarResults {
}

/**
 * 点击收起左侧边栏
 * FLOW_NODE_ON_CLICK_COLLAPSE_LEFT_SIDEBAR
 * 唯一id: LeftComponent/FLOW_CODE_ON_CLICK_COLLAPSE_LEFT_SIDEBAR
 */
export const flowCodeOnClickCollapseLeftSidebar = async (params: FlowCodeOnClickCollapseLeftSidebarParams): Promise<FlowCodeOnClickCollapseLeftSidebarResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  
  // 判断逻辑：仅在侧边栏当前为展开状态时才执行收起操作
  setter.setExpandVisibleControlsOnLeftSidebar((prev: boolean) => (prev ? false : prev));
  setter.setFoldingUpVisibleControlsOnLeftSidebar((prev: boolean) => (!prev ? true : prev));
  // 结束流程
  return {}
};
