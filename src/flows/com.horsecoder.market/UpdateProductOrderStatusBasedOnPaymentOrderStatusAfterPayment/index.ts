import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * orderNumber 订单号
 * marketingAccountId 营销账户ID
 */
export interface FlowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPaymentParams {
  orderNumber: string;
  marketingAccountId: string;
}

/**
 * 出参明细:
 * updateStatus 订单更新状态
 */
export interface FlowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPaymentResults {
  updateStatus: number;
}

/**
 * 支付后根据支付订单状态更新产品订单状态
 * @com.horsecoder.market/FLOW_UPDATE_PRODUCT_ORDER_STATUS_BASED_ON_PAYMENT_ORDER_STATUS_AFTER_PAYMENT
 */
export const flowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPayment = async (params: FlowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPaymentParams): StandardPromise<FlowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPaymentResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_UPDATE_PRODUCT_ORDER_STATUS_BASED_ON_PAYMENT_ORDER_STATUS_AFTER_PAYMENT',
      params: { ...params },
    },
  });
};


export const flowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPaymentFacade = async (params: FlowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPaymentParams): Promise<FlowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPaymentResults> => {
  const { data: { value } } =  await flowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPayment(params);
  return value;
};