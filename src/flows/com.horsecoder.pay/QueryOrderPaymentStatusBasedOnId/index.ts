import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 * orderType 订单类型
 */
export interface FlowQueryOrderPaymentStatusBasedOnIdParams {
  accountId: string;
  orderType: string;
}

/**
 * 出参明细:
 * orderExists 是否存在未完结订单
 * orderNumber 订单号
 * orderStatus 订单状态
 * payType 当前支付渠道
 * orderAmount 订单金额
 * isExpired 是否已过期
 * createTimestamp 创建时间戳
 * paymentTimestamp 支付时间戳
 */
export interface FlowQueryOrderPaymentStatusBasedOnIdResults {
  orderExists: any;
  orderNumber: string;
  orderStatus: number;
  payType: number;
  orderAmount: any;
  isExpired: any;
  createTimestamp: number;
  paymentTimestamp?: number;
}

/**
 * 根据ID查询订单支付状态
 * @com.horsecoder.pay/FLOW_QUERY_ORDER_PAYMENT_STATUS_BASED_ON_ID
 */
export const flowQueryOrderPaymentStatusBasedOnId = async (params: FlowQueryOrderPaymentStatusBasedOnIdParams): StandardPromise<FlowQueryOrderPaymentStatusBasedOnIdResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_QUERY_ORDER_PAYMENT_STATUS_BASED_ON_ID',
      params: { ...params },
    },
  });
};


export const flowQueryOrderPaymentStatusBasedOnIdFacade = async (params: FlowQueryOrderPaymentStatusBasedOnIdParams): Promise<FlowQueryOrderPaymentStatusBasedOnIdResults> => {
  const { data: { value } } =  await flowQueryOrderPaymentStatusBasedOnId(params);
  return value;
};