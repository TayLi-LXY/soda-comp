import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 * subscriptionId 订阅ID
 * returnURL 返回URL
 */
export interface FlowWeChatEntrustedSigningParams {
  accountId?: string;
  subscriptionId?: string;
  returnURL?: string;
}

/**
 * 出参明细:
 * signingURL 签约URL
 * contractId 合同ID
 */
export interface FlowWeChatEntrustedSigningResults {
  signingURL?: string;
  contractId?: string;
}

/**
 * 微信委托签约
 * @com.horsecoder.pay/FLOW_WE_CHAT_ENTRUSTED_SIGNING
 */
export const flowWeChatEntrustedSigning = async (params: FlowWeChatEntrustedSigningParams): StandardPromise<FlowWeChatEntrustedSigningResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_WE_CHAT_ENTRUSTED_SIGNING',
      params: { ...params },
    },
  });
};


export const flowWeChatEntrustedSigningFacade = async (params: FlowWeChatEntrustedSigningParams): Promise<FlowWeChatEntrustedSigningResults> => {
  const { data: { value } } =  await flowWeChatEntrustedSigning(params);
  return value;
};