import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * paymentOrderNumber 支付订单号
 * accountId 账户ID
 */
export interface FlowCancelPaymentOrderParams {
  paymentOrderNumber: string;
  accountId: string;
}

/**
 * 出参明细:
 * cancelResult 取消结果
 */
export interface FlowCancelPaymentOrderResults {
  cancelResult: any;
}

/**
 * 取消支付订单
 * @com.horsecoder.pay/FLOW_CANCEL_PAYMENT_ORDER
 */
export const flowCancelPaymentOrder = async (params: FlowCancelPaymentOrderParams): StandardPromise<FlowCancelPaymentOrderResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_CANCEL_PAYMENT_ORDER',
      params: { ...params },
    },
  });
};


export const flowCancelPaymentOrderFacade = async (params: FlowCancelPaymentOrderParams): Promise<FlowCancelPaymentOrderResults> => {
  const { data: { value } } =  await flowCancelPaymentOrder(params);
  return value;
};