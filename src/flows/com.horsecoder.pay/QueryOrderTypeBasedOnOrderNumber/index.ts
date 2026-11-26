import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * orderNumber 订单号
 */
export interface FlowQueryOrderTypeBasedOnOrderNumberParams {
  orderNumber?: string;
}

/**
 * 出参明细:
 * orderType 订单类型
 */
export interface FlowQueryOrderTypeBasedOnOrderNumberResults {
  orderType?: string;
}

/**
 * 根据订单号查询订单类型
 * @com.horsecoder.pay/FLOW_QUERY_ORDER_TYPE_BASED_ON_ORDER_NUMBER
 */
export const flowQueryOrderTypeBasedOnOrderNumber = async (params: FlowQueryOrderTypeBasedOnOrderNumberParams): StandardPromise<FlowQueryOrderTypeBasedOnOrderNumberResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_QUERY_ORDER_TYPE_BASED_ON_ORDER_NUMBER',
      params: { ...params },
    },
  });
};


export const flowQueryOrderTypeBasedOnOrderNumberFacade = async (params: FlowQueryOrderTypeBasedOnOrderNumberParams): Promise<FlowQueryOrderTypeBasedOnOrderNumberResults> => {
  const { data: { value } } =  await flowQueryOrderTypeBasedOnOrderNumber(params);
  return value;
};