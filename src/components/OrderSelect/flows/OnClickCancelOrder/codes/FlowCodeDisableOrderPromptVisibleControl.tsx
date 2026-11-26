
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeDisableOrderPromptVisibleControlParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeDisableOrderPromptVisibleControlResults {
}

/**
 * 设置订单提示可见控制不可见
 * FLOW_NODE_DISABLE_ORDER_PROMPT_VISIBLE_CONTROL
 * 唯一id: OrderSelect/FLOW_CODE_DISABLE_ORDER_PROMPT_VISIBLE_CONTROL
 */
export const flowCodeDisableOrderPromptVisibleControl = async (params: FlowCodeDisableOrderPromptVisibleControlParams): Promise<FlowCodeDisableOrderPromptVisibleControlResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setOrderPromptVisibleControl(false);
  // 结束流程
  return {}
};
