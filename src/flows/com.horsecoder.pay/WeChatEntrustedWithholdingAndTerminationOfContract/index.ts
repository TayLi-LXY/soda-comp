import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * contractId 合同ID
 */
export interface FlowWeChatEntrustedWithholdingAndTerminationOfContractParams {
  contractId: string;
}

/**
 * 出参明细:
 * processingResult 处理结果
 */
export interface FlowWeChatEntrustedWithholdingAndTerminationOfContractResults {
  processingResult: string;
}

/**
 * 微信委托代扣解约
 * @com.horsecoder.pay/FLOW_WE_CHAT_ENTRUSTED_WITHHOLDING_AND_TERMINATION_OF_CONTRACT
 */
export const flowWeChatEntrustedWithholdingAndTerminationOfContract = async (params: FlowWeChatEntrustedWithholdingAndTerminationOfContractParams): StandardPromise<FlowWeChatEntrustedWithholdingAndTerminationOfContractResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_WE_CHAT_ENTRUSTED_WITHHOLDING_AND_TERMINATION_OF_CONTRACT',
      params: { ...params },
    },
  });
};


export const flowWeChatEntrustedWithholdingAndTerminationOfContractFacade = async (params: FlowWeChatEntrustedWithholdingAndTerminationOfContractParams): Promise<FlowWeChatEntrustedWithholdingAndTerminationOfContractResults> => {
  const { data: { value } } =  await flowWeChatEntrustedWithholdingAndTerminationOfContract(params);
  return value;
};