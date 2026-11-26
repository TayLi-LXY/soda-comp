import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Order } from '@/types/com.horsecoder.pay/exp/Order';

/**
 * 入参明细:
 * orderNumber 订单号
 */
export interface FlowQueryOrderDetailsBasedOnOrderNumberParams {
  orderNumber: string;
}

/**
 * 出参明细:
 * orderEntity 订单实体
 */
export interface FlowQueryOrderDetailsBasedOnOrderNumberResults {
  orderEntity: Order;
}

/**
 * 根据订单号查询订单详情
 * @com.horsecoder.pay/FLOW_QUERY_ORDER_DETAILS_BASED_ON_ORDER_NUMBER
 */
export const flowQueryOrderDetailsBasedOnOrderNumber = async (params: FlowQueryOrderDetailsBasedOnOrderNumberParams): StandardPromise<FlowQueryOrderDetailsBasedOnOrderNumberResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_QUERY_ORDER_DETAILS_BASED_ON_ORDER_NUMBER',
      params: { ...params },
    },
  });
};


export const flowQueryOrderDetailsBasedOnOrderNumberFacade = async (params: FlowQueryOrderDetailsBasedOnOrderNumberParams): Promise<FlowQueryOrderDetailsBasedOnOrderNumberResults> => {
  const { data: { value } } =  await flowQueryOrderDetailsBasedOnOrderNumber(params);
  return value;
};