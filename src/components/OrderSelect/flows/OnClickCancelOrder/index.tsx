import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 * paymentOrderNumber 支付订单号
 */
export interface FlowOnClickCancelOrderParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
  paymentOrderNumber: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickCancelOrderResults {
}

/**
 * 点击取消订单
 * @com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_CANCEL_ORDER
 */
export const flowOnClickCancelOrder = async (params: FlowOnClickCancelOrderParams): Promise<FlowOnClickCancelOrderResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_CANCEL_ORDER', { ...params });
};
