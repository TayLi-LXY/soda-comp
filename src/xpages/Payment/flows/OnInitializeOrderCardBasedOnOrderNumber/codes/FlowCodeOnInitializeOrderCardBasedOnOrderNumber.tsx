
/**
 * 入参明细:
 * orderNumber 订单号
 * paymentAccountId 支付账户ID
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnInitializeOrderCardBasedOnOrderNumberParams {
  orderNumber: any;
  paymentAccountId: any;
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnInitializeOrderCardBasedOnOrderNumberResults {
}

/**
 * 根据订单号初始化订单卡片
 * FLOW_NODE_ON_INITIALIZE_ORDER_CARD_BASED_ON_ORDER_NUMBER
 * 唯一id: Payment/FLOW_CODE_ON_INITIALIZE_ORDER_CARD_BASED_ON_ORDER_NUMBER
 */
export const flowCodeOnInitializeOrderCardBasedOnOrderNumber = async (params: FlowCodeOnInitializeOrderCardBasedOnOrderNumberParams): Promise<FlowCodeOnInitializeOrderCardBasedOnOrderNumberResults> => {
  // 初始化流程出参
  // 开始流程
  const { orderNumber } = params;
  const { paymentAccountId } = params;
  const { setter } = params;
  const { dispatch } = params;
  // 结束流程
  return {}
};
