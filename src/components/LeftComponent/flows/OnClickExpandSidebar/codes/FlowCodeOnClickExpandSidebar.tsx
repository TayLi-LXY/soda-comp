
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnClickExpandSidebarParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickExpandSidebarResults {
}

/**
 * 点击展开侧边栏
 * FLOW_NODE_ON_CLICK_EXPAND_SIDEBAR
 * 唯一id: LeftComponent/FLOW_CODE_ON_CLICK_EXPAND_SIDEBAR
 */
export const flowCodeOnClickExpandSidebar = async (params: FlowCodeOnClickExpandSidebarParams): Promise<FlowCodeOnClickExpandSidebarResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;

  // 判断逻辑：仅在侧边栏当前为关闭状态时才执行展开操作
  setter.setExpandVisibleControlsOnLeftSidebar((prev: boolean) => (!prev ? true : prev));
  setter.setFoldingUpVisibleControlsOnLeftSidebar((prev: boolean) => (prev ? false : prev));
  // 结束流程
  return {}
};
