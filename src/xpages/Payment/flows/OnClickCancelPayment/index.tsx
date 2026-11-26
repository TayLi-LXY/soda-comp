import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * orderNumber 订单号
 * setter 页面设置器
 * paymentAccountId 支付账户ID
 */
export interface FlowOnClickCancelPaymentParams {
  dispatch: any;
  orderNumber: any;
  setter: any;
  paymentAccountId: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickCancelPaymentResults {
}

/**
 * 点击取消支付
 * @com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_CLICK_CANCEL_PAYMENT
 */
export const flowOnClickCancelPayment = async (params: FlowOnClickCancelPaymentParams): Promise<FlowOnClickCancelPaymentResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_CLICK_CANCEL_PAYMENT', { ...params });
};
