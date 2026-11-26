import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrderProductWithProductInfo } from '@/flows/com.horsecoder.market/CalculateOrderPrice/types/OrderProductWithProductInfo';
import type { OrderOpenModel } from '@/flows/com.horsecoder.market/SubmitProductOrders/types/OrderOpenModel';

/**
 * 入参明细:
 * accountId 账户ID
 * orderProductList 订单产品列表
 */
export interface FlowSubmitProductOrdersParams {
  accountId: string;
  orderProductList: OrderProductWithProductInfo[];
}

/**
 * 出参明细:
 * paymentOrderNumber 支付订单号
 * orderOpenModel 订单开放模型
 */
export interface FlowSubmitProductOrdersResults {
  paymentOrderNumber: string;
  orderOpenModel: OrderOpenModel;
}

/**
 * 提交产品订单
 * @com.horsecoder.market/FLOW_SUBMIT_PRODUCT_ORDERS
 */
export const flowSubmitProductOrders = async (params: FlowSubmitProductOrdersParams): StandardPromise<FlowSubmitProductOrdersResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_SUBMIT_PRODUCT_ORDERS',
      params: { ...params },
    },
  });
};


export const flowSubmitProductOrdersFacade = async (params: FlowSubmitProductOrdersParams): Promise<FlowSubmitProductOrdersResults> => {
  const { data: { value } } =  await flowSubmitProductOrders(params);
  return value;
};