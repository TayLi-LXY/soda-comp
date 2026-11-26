import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 * memberType 会员类型
 */
export interface FlowOnCreatePaymentOrderParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
  memberType: any;
}

/**
 * 出参明细:
 */
export interface FlowOnCreatePaymentOrderResults {
}

/**
 * 创建支付订单
 * @com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CREATE_PAYMENT_ORDER
 */
export const flowOnCreatePaymentOrder = async (params: FlowOnCreatePaymentOrderParams): Promise<FlowOnCreatePaymentOrderResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CREATE_PAYMENT_ORDER', { ...params });
};
