import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userSubscriptionId 用户订阅ID
 * paymentRecordId 支付记录ID
 */
export interface FlowAlipayPeriodicDeductionExecutionParams {
  userSubscriptionId: string;
  paymentRecordId: string;
}

/**
 * 出参明细:
 * executionResult 执行结果
 * orderNumber 订单号
 */
export interface FlowAlipayPeriodicDeductionExecutionResults {
  executionResult: string;
  orderNumber: string;
}

/**
 * 支付宝周期扣款执行
 * @com.horsecoder.pay/FLOW_ALIPAY_PERIODIC_DEDUCTION_EXECUTION
 */
export const flowAlipayPeriodicDeductionExecution = async (params: FlowAlipayPeriodicDeductionExecutionParams): StandardPromise<FlowAlipayPeriodicDeductionExecutionResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_ALIPAY_PERIODIC_DEDUCTION_EXECUTION',
      params: { ...params },
    },
  });
};


export const flowAlipayPeriodicDeductionExecutionFacade = async (params: FlowAlipayPeriodicDeductionExecutionParams): Promise<FlowAlipayPeriodicDeductionExecutionResults> => {
  const { data: { value } } =  await flowAlipayPeriodicDeductionExecution(params);
  return value;
};