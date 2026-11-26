
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeEnableWeChatLoginPanelVisibleControlParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeEnableWeChatLoginPanelVisibleControlResults {
}

/**
 * 设置微信登录面板可见控制可见
 * FLOW_NODE_ENABLE_WE_CHAT_LOGIN_PANEL_VISIBLE_CONTROL
 * 唯一id: LogIn/FLOW_CODE_ENABLE_WE_CHAT_LOGIN_PANEL_VISIBLE_CONTROL
 */
export const flowCodeEnableWeChatLoginPanelVisibleControl = async (params: FlowCodeEnableWeChatLoginPanelVisibleControlParams): Promise<FlowCodeEnableWeChatLoginPanelVisibleControlResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setWeChatLoginPanelVisibleControl(false);
  // 结束流程
  return {}
};
