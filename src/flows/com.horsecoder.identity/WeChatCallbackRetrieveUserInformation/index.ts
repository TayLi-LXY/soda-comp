import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * code code
 */
export interface FlowWeChatCallbackRetrieveUserInformationParams {
  code: string;
}

/**
 * 出参明细:
 * tempToken 临时token
 * ifRegistered 是否注册过
 * userId 用户ID
 */
export interface FlowWeChatCallbackRetrieveUserInformationResults {
  tempToken?: string;
  ifRegistered: any;
  userId?: string;
}

/**
 * 微信回调获取用户信息
 * @com.horsecoder.identity/FLOW_WE_CHAT_CALLBACK_RETRIEVE_USER_INFORMATION
 */
export const flowWeChatCallbackRetrieveUserInformation = async (params: FlowWeChatCallbackRetrieveUserInformationParams): StandardPromise<FlowWeChatCallbackRetrieveUserInformationResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_WE_CHAT_CALLBACK_RETRIEVE_USER_INFORMATION',
      params: { ...params },
    },
  });
};


export const flowWeChatCallbackRetrieveUserInformationFacade = async (params: FlowWeChatCallbackRetrieveUserInformationParams): Promise<FlowWeChatCallbackRetrieveUserInformationResults> => {
  const { data: { value } } =  await flowWeChatCallbackRetrieveUserInformation(params);
  return value;
};