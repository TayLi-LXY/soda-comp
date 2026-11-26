import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { UserLoginResult } from '@/flows/com.horsecoder.identity/Login/types/UserLoginResult';

/**
 * 入参明细:
 * mobilePhoneNumber 手机号
 * captcha 验证码
 */
export interface FlowVerificationCodeLoginParams {
  mobilePhoneNumber: string;
  captcha: string;
}

/**
 * 出参明细:
 * userInfo 用户信息
 */
export interface FlowVerificationCodeLoginResults {
  userInfo: UserLoginResult;
}

/**
 * 验证码登录
 * @com.horsecoder.identity/FLOW_VERIFICATION_CODE_LOGIN
 */
export const flowVerificationCodeLogin = async (params: FlowVerificationCodeLoginParams): StandardPromise<FlowVerificationCodeLoginResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_VERIFICATION_CODE_LOGIN',
      params: { ...params },
    },
  });
};


export const flowVerificationCodeLoginFacade = async (params: FlowVerificationCodeLoginParams): Promise<FlowVerificationCodeLoginResults> => {
  const { data: { value } } =  await flowVerificationCodeLogin(params);
  return value;
};