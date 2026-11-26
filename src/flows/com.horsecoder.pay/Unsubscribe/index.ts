import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 * cancelReason 取消原因
 */
export interface FlowUnsubscribeParams {
  accountId?: string;
  cancelReason?: string;
}

/**
 * 出参明细:
 * cancelResult 取消结果
 */
export interface FlowUnsubscribeResults {
  cancelResult: string;
}

/**
 * 取消订阅
 * @com.horsecoder.pay/FLOW_UNSUBSCRIBE
 */
export const flowUnsubscribe = async (params: FlowUnsubscribeParams): StandardPromise<FlowUnsubscribeResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_UNSUBSCRIBE',
      params: { ...params },
    },
  });
};


export const flowUnsubscribeFacade = async (params: FlowUnsubscribeParams): Promise<FlowUnsubscribeResults> => {
  const { data: { value } } =  await flowUnsubscribe(params);
  return value;
};