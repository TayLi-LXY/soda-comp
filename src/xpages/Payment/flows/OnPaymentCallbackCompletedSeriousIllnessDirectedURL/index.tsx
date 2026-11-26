import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * redirectURL 重定向url
 * orderNumber 订单号
 * selectPaymentMethod 是否选择支付方式
 * paymentCompletionCallback 支付完成回调
 * setter 页面设置器
 * paymentAccountId 支付账户ID
 */
export interface FlowOnPaymentCallbackCompletedSeriousIllnessDirectedURLParams {
  dispatch: any;
  redirectURL: any;
  orderNumber: any;
  selectPaymentMethod: any;
  paymentCompletionCallback: any;
  setter: any;
  paymentAccountId: any;
}

/**
 * 出参明细:
 */
export interface FlowOnPaymentCallbackCompletedSeriousIllnessDirectedURLResults {
}

/**
 * 已完成支付回调病重定向到url
 * @com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_PAYMENT_CALLBACK_COMPLETED_SERIOUS_ILLNESS_DIRECTED_U_R_L
 */
export const flowOnPaymentCallbackCompletedSeriousIllnessDirectedURL = async (params: FlowOnPaymentCallbackCompletedSeriousIllnessDirectedURLParams): Promise<FlowOnPaymentCallbackCompletedSeriousIllnessDirectedURLResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_PAYMENT_CALLBACK_COMPLETED_SERIOUS_ILLNESS_DIRECTED_U_R_L', { ...params });
};
