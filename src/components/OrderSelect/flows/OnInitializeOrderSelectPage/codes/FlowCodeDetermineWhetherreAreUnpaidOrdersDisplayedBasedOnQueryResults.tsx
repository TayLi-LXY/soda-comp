
/**
 * 入参明细:
 * orderStatus 订单状态
 * isExpired 是否已过期
 * setter 页面设置器
 * dispatch WEB状态更新
 * orderNumber 订单号
 */
export interface FlowCodeDetermineWhetherreAreUnpaidOrdersDisplayedBasedOnQueryResultsParams {
  orderStatus: number;
  isExpired: any;
  setter: any;
  dispatch: any;
  orderNumber: string;
}

/**
 * 出参明细:
 */
export interface FlowCodeDetermineWhetherreAreUnpaidOrdersDisplayedBasedOnQueryResultsResults {
}

/**
 * 根据查询结果判断是否显示有未支付订单
 * FLOW_NODE_DETERMINE_WHETHERRE_ARE_UNPAID_ORDERS_DISPLAYED_BASED_ON_QUERY_RESULTS
 * 唯一id: OrderSelect/FLOW_CODE_DETERMINE_WHETHERRE_ARE_UNPAID_ORDERS_DISPLAYED_BASED_ON_QUERY_RESULTS
 */
export const flowCodeDetermineWhetherreAreUnpaidOrdersDisplayedBasedOnQueryResults = async (params: FlowCodeDetermineWhetherreAreUnpaidOrdersDisplayedBasedOnQueryResultsParams): Promise<FlowCodeDetermineWhetherreAreUnpaidOrdersDisplayedBasedOnQueryResultsResults> => {
  // 初始化流程出参
  // 开始流程
  const { orderStatus } = params;
  const { isExpired } = params;
  const { setter } = params;
  const { dispatch } = params;
  const { orderNumber } = params;

  console.log('[判断未支付订单] orderStatus:', orderStatus, ', isExpired:', isExpired, ', params:', params);

  setter.setPaymentOrderNumber(orderNumber);


  // 订单状态(0:已创建/待支付 1:已支付/已完成 2:已取消 3:已提交三方平台 4:已退款)
  // 未支付状态(0或3)且未过期，显示提示
  if ((orderStatus === 0 || orderStatus === 3) && !isExpired) {
    setter.setOrderPromptVisibleControl(true);
  } else {
    setter.setOrderPromptVisibleControl(false);
  }
  // 结束流程
  return {}
};
