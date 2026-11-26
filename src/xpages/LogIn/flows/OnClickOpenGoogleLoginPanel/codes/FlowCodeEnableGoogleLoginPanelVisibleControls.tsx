
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeEnableGoogleLoginPanelVisibleControlsParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeEnableGoogleLoginPanelVisibleControlsResults {
}

/**
 * 设置google登录面板可见控制可见
 * FLOW_NODE_ENABLE_GOOGLE_LOGIN_PANEL_VISIBLE_CONTROLS
 * 唯一id: LogIn/FLOW_CODE_ENABLE_GOOGLE_LOGIN_PANEL_VISIBLE_CONTROLS
 */
export const flowCodeEnableGoogleLoginPanelVisibleControls = async (params: FlowCodeEnableGoogleLoginPanelVisibleControlsParams): Promise<FlowCodeEnableGoogleLoginPanelVisibleControlsResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setGoogleLoginPanelVisibleControls(true);
  // 结束流程
  return {}
};
