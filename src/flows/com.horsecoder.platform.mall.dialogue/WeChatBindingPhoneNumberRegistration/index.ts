import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * phone 手机号
 * captcha 验证码
 * tempToken 临时token
 */
export interface FlowWeChatBindingPhoneNumberRegistrationParams {
  phone: string;
  captcha: string;
  tempToken: string;
}

/**
 * 出参明细:
 * userId 用户ID
 * username 用户名
 */
export interface FlowWeChatBindingPhoneNumberRegistrationResults {
  userId: string;
  username: string;
}

/**
 * 微信绑定手机号注册
 * @com.horsecoder.platform.mall.dialogue/FLOW_WE_CHAT_BINDING_PHONE_NUMBER_REGISTRATION
 */
export const flowWeChatBindingPhoneNumberRegistration = async (params: FlowWeChatBindingPhoneNumberRegistrationParams): StandardPromise<FlowWeChatBindingPhoneNumberRegistrationResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_WE_CHAT_BINDING_PHONE_NUMBER_REGISTRATION',
      params: { ...params },
    },
  });
};


export const flowWeChatBindingPhoneNumberRegistrationFacade = async (params: FlowWeChatBindingPhoneNumberRegistrationParams): Promise<FlowWeChatBindingPhoneNumberRegistrationResults> => {
  const { data: { value } } =  await flowWeChatBindingPhoneNumberRegistration(params);
  return value;
};