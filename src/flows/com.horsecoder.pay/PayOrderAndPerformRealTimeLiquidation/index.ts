import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * paymentType 支付类型
 * paymentOrderNumber 支付订单号
 * accountId 账户ID
 */
export interface FlowPayOrderAndPerformRealTimeLiquidationParams {
  paymentType: number;
  paymentOrderNumber: string;
  accountId?: string;
}

/**
 * 出参明细:
 * orderEntity 订单实体
 * qRCodeLink 二维码链接
 */
export interface FlowPayOrderAndPerformRealTimeLiquidationResults {
  orderEntity: any;
  qRCodeLink?: string;
}

/**
 * 支付订单并进行实时毛额清算
 * @com.horsecoder.pay/FLOW_PAY_ORDER_AND_PERFORM_REAL_TIME_LIQUIDATION
 */
export const flowPayOrderAndPerformRealTimeLiquidation = async (params: FlowPayOrderAndPerformRealTimeLiquidationParams): StandardPromise<FlowPayOrderAndPerformRealTimeLiquidationResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_PAY_ORDER_AND_PERFORM_REAL_TIME_LIQUIDATION',
      params: { ...params },
    },
  });
};


export const flowPayOrderAndPerformRealTimeLiquidationFacade = async (params: FlowPayOrderAndPerformRealTimeLiquidationParams): Promise<FlowPayOrderAndPerformRealTimeLiquidationResults> => {
  const { data: { value } } =  await flowPayOrderAndPerformRealTimeLiquidation(params);
  return value;
};