
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeDisableVisibleControlInLoginPanelParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeDisableVisibleControlInLoginPanelResults {
}

/**
 * 设置登录面板可见控制不可见
 * FLOW_NODE_DISABLE_VISIBLE_CONTROL_IN_LOGIN_PANEL
 * 唯一id: LogIn/FLOW_CODE_DISABLE_VISIBLE_CONTROL_IN_LOGIN_PANEL
 */
export const flowCodeDisableVisibleControlInLoginPanel = async (params: FlowCodeDisableVisibleControlInLoginPanelParams): Promise<FlowCodeDisableVisibleControlInLoginPanelResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setVisibleControlInLoginPanel(false);
  // 结束流程
  return {}
};
