import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 * subscriptionId 订阅ID
 * returnURL 返回URL
 */
export interface FlowAlipayPeriodicDeductionSigningParams {
  accountId: string;
  subscriptionId: string;
  returnURL: string;
}

/**
 * 出参明细:
 * signingURL 签约URL
 * agreementNumber 协议单号
 */
export interface FlowAlipayPeriodicDeductionSigningResults {
  signingURL: string;
  agreementNumber: string;
}

/**
 * 支付宝周期扣款签约
 * @com.horsecoder.pay/FLOW_ALIPAY_PERIODIC_DEDUCTION_SIGNING
 */
export const flowAlipayPeriodicDeductionSigning = async (params: FlowAlipayPeriodicDeductionSigningParams): StandardPromise<FlowAlipayPeriodicDeductionSigningResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_ALIPAY_PERIODIC_DEDUCTION_SIGNING',
      params: { ...params },
    },
  });
};


export const flowAlipayPeriodicDeductionSigningFacade = async (params: FlowAlipayPeriodicDeductionSigningParams): Promise<FlowAlipayPeriodicDeductionSigningResults> => {
  const { data: { value } } =  await flowAlipayPeriodicDeductionSigning(params);
  return value;
};