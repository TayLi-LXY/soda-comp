import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * agreementNumber 协议编号
 */
export interface FlowTerminationOfAlipayParams {
  agreementNumber: string;
}

/**
 * 出参明细:
 * terminationResult 解约结果
 */
export interface FlowTerminationOfAlipayResults {
  terminationResult: string;
}

/**
 * 支付宝解约
 * @com.horsecoder.pay/FLOW_TERMINATION_OF_ALIPAY
 */
export const flowTerminationOfAlipay = async (params: FlowTerminationOfAlipayParams): StandardPromise<FlowTerminationOfAlipayResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_TERMINATION_OF_ALIPAY',
      params: { ...params },
    },
  });
};


export const flowTerminationOfAlipayFacade = async (params: FlowTerminationOfAlipayParams): Promise<FlowTerminationOfAlipayResults> => {
  const { data: { value } } =  await flowTerminationOfAlipay(params);
  return value;
};