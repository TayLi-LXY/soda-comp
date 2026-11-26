import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * orderNumber 订单号
 * paymentAccountId 支付账户ID
 * setter 页面设置器
 */
export interface FlowOnInitializeWeChatPayOrderParams {
  dispatch: any;
  orderNumber: any;
  paymentAccountId: any;
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeWeChatPayOrderResults {
}

/**
 * 初始化支付订单
 * @com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_INITIALIZE_WE_CHAT_PAY_ORDER
 */
export const flowOnInitializeWeChatPayOrder = async (params: FlowOnInitializeWeChatPayOrderParams): Promise<FlowOnInitializeWeChatPayOrderResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_INITIALIZE_WE_CHAT_PAY_ORDER', { ...params });
};
