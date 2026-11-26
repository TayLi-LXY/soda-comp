import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * orderNumber 订单号
 * paymentAccountId 支付账户ID
 */
export interface FlowOnClickAlipayPaymentButtonParams {
  setter: any;
  dispatch: any;
  orderNumber: any;
  paymentAccountId: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickAlipayPaymentButtonResults {
}

/**
 * 点击支付宝支付按钮
 * @com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_CLICK_ALIPAY_PAYMENT_BUTTON
 */
export const flowOnClickAlipayPaymentButton = async (params: FlowOnClickAlipayPaymentButtonParams): Promise<FlowOnClickAlipayPaymentButtonResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_CLICK_ALIPAY_PAYMENT_BUTTON', { ...params });
};
