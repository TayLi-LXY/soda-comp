import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * paymentType 支付类型
 * paymentOrderNumber 支付订单号
 * accountId 账户ID
 */
export interface FlowPayBasedOnOrderNumberParams {
  paymentType: number;
  paymentOrderNumber: string;
  accountId?: string;
}

/**
 * 出参明细:
 * orderEntity 订单实体
 * qRCodeLink 二维码链接
 */
export interface FlowPayBasedOnOrderNumberResults {
  orderEntity: any;
  qRCodeLink?: string;
}

/**
 * 根据订单号进行支付
 * @com.horsecoder.pay/FLOW_PAY_BASED_ON_ORDER_NUMBER
 */
export const flowPayBasedOnOrderNumber = async (params: FlowPayBasedOnOrderNumberParams): StandardPromise<FlowPayBasedOnOrderNumberResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_PAY_BASED_ON_ORDER_NUMBER',
      params: { ...params },
    },
  });
};


export const flowPayBasedOnOrderNumberFacade = async (params: FlowPayBasedOnOrderNumberParams): Promise<FlowPayBasedOnOrderNumberResults> => {
  const { data: { value } } =  await flowPayBasedOnOrderNumber(params);
  return value;
};