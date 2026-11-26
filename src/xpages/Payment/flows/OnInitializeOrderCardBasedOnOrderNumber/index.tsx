import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * orderNumber 订单号
 * paymentAccountId 支付账户ID
 */
export interface FlowOnInitializeOrderCardBasedOnOrderNumberParams {
  setter: any;
  dispatch: any;
  orderNumber: any;
  paymentAccountId: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeOrderCardBasedOnOrderNumberResults {
}

/**
 * 根据订单号初始化订单卡片
 * @com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_INITIALIZE_ORDER_CARD_BASED_ON_ORDER_NUMBER
 */
export const flowOnInitializeOrderCardBasedOnOrderNumber = async (params: FlowOnInitializeOrderCardBasedOnOrderNumberParams): Promise<FlowOnInitializeOrderCardBasedOnOrderNumberResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_INITIALIZE_ORDER_CARD_BASED_ON_ORDER_NUMBER', { ...params });
};
