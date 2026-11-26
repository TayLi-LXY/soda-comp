import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * orderNumber 订单号
 */
export interface FlowVerifyOrderCompletedBasedOnOrderNumberParams {
  orderNumber: string;
}

/**
 * 出参明细:
 * isCompleted 是否完成
 */
export interface FlowVerifyOrderCompletedBasedOnOrderNumberResults {
  isCompleted: any;
}

/**
 * 根据订单号核验订单是否完成
 * @com.horsecoder.pay/FLOW_VERIFY_ORDER_COMPLETED_BASED_ON_ORDER_NUMBER
 */
export const flowVerifyOrderCompletedBasedOnOrderNumber = async (params: FlowVerifyOrderCompletedBasedOnOrderNumberParams): StandardPromise<FlowVerifyOrderCompletedBasedOnOrderNumberResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_VERIFY_ORDER_COMPLETED_BASED_ON_ORDER_NUMBER',
      params: { ...params },
    },
  });
};


export const flowVerifyOrderCompletedBasedOnOrderNumberFacade = async (params: FlowVerifyOrderCompletedBasedOnOrderNumberParams): Promise<FlowVerifyOrderCompletedBasedOnOrderNumberResults> => {
  const { data: { value } } =  await flowVerifyOrderCompletedBasedOnOrderNumber(params);
  return value;
};