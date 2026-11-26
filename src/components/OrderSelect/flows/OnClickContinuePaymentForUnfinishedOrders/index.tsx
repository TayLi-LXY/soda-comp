import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * paymentOrderNumber 支付订单号
 * memberType 会员类型
 * loggedinUser 登录用户
 */
export interface FlowOnClickContinuePaymentForUnfinishedOrdersParams {
  setter: any;
  dispatch: any;
  paymentOrderNumber: any;
  memberType: any;
  loggedinUser: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickContinuePaymentForUnfinishedOrdersResults {
}

/**
 * 点击继续支付未完成订单
 * @com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_CONTINUE_PAYMENT_FOR_UNFINISHED_ORDERS
 */
export const flowOnClickContinuePaymentForUnfinishedOrders = async (params: FlowOnClickContinuePaymentForUnfinishedOrdersParams): Promise<FlowOnClickContinuePaymentForUnfinishedOrdersResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_CONTINUE_PAYMENT_FOR_UNFINISHED_ORDERS', { ...params });
};
