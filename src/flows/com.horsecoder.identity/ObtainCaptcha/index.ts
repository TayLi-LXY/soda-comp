import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * mobilePhoneNumber 手机号
 * userType 用户类型
 */
export interface FlowObtainCaptchaParams {
  mobilePhoneNumber: string;
  userType?: number;
}

/**
 * 出参明细:
 */
export interface FlowObtainCaptchaResults {
}

/**
 * 获取验证码
 * @com.horsecoder.identity/FLOW_OBTAIN_CAPTCHA
 */
export const flowObtainCaptcha = async (params: FlowObtainCaptchaParams): StandardPromise<FlowObtainCaptchaResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_OBTAIN_CAPTCHA',
      params: { ...params },
    },
  });
};


export const flowObtainCaptchaFacade = async (params: FlowObtainCaptchaParams): Promise<FlowObtainCaptchaResults> => {
  const { data: { value } } =  await flowObtainCaptcha(params);
  return value;
};