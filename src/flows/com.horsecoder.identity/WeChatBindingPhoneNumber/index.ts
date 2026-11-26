import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * phone 手机号
 * captcha 验证码
 * tempToken 临时token
 */
export interface FlowWeChatBindingPhoneNumberParams {
  phone: string;
  captcha: string;
  tempToken: string;
}

/**
 * 出参明细:
 * userId 用户ID
 * username 用户名
 * token token
 */
export interface FlowWeChatBindingPhoneNumberResults {
  userId: string;
  username: string;
  token: string;
}

/**
 * 微信绑定手机号
 * @com.horsecoder.identity/FLOW_WE_CHAT_BINDING_PHONE_NUMBER
 */
export const flowWeChatBindingPhoneNumber = async (params: FlowWeChatBindingPhoneNumberParams): StandardPromise<FlowWeChatBindingPhoneNumberResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_WE_CHAT_BINDING_PHONE_NUMBER',
      params: { ...params },
    },
  });
};


export const flowWeChatBindingPhoneNumberFacade = async (params: FlowWeChatBindingPhoneNumberParams): Promise<FlowWeChatBindingPhoneNumberResults> => {
  const { data: { value } } =  await flowWeChatBindingPhoneNumber(params);
  return value;
};