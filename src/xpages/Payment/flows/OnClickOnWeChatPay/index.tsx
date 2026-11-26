import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * orderNumber 订单号
 * paymentAccountId 支付账户ID
 */
export interface FlowOnClickOnWeChatPayParams {
  setter: any;
  dispatch: any;
  orderNumber: any;
  paymentAccountId: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOnWeChatPayResults {
}

/**
 * 点击微信支付
 * @com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_CLICK_ON_WE_CHAT_PAY
 */
export const flowOnClickOnWeChatPay = async (params: FlowOnClickOnWeChatPayParams): Promise<FlowOnClickOnWeChatPayResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_CLICK_ON_WE_CHAT_PAY', { ...params });
};
