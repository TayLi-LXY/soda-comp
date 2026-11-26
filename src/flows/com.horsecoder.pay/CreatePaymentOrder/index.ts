import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrderDetails } from '@/flows/com.horsecoder.pay/CreatePaymentOrder/types/OrderDetails';

/**
 * 入参明细:
 * paymentOrder 支付订单实体
 * orderDetails 订单明细
 */
export interface FlowCreatePaymentOrderParams {
  paymentOrder: any;
  orderDetails?: OrderDetails[];
}

/**
 * 出参明细:
 * paymentOrderNumber 支付订单号
 */
export interface FlowCreatePaymentOrderResults {
  paymentOrderNumber: string;
}

/**
 * 创建支付订单
 * @com.horsecoder.pay/FLOW_CREATE_PAYMENT_ORDER
 */
export const flowCreatePaymentOrder = async (params: FlowCreatePaymentOrderParams): StandardPromise<FlowCreatePaymentOrderResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_CREATE_PAYMENT_ORDER',
      params: { ...params },
    },
  });
};


export const flowCreatePaymentOrderFacade = async (params: FlowCreatePaymentOrderParams): Promise<FlowCreatePaymentOrderResults> => {
  const { data: { value } } =  await flowCreatePaymentOrder(params);
  return value;
};