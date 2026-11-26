import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * mobilePhoneNumber 手机号
 * userType 用户类型
 */
export interface FlowObtainLoginVerificationCodeParams {
  mobilePhoneNumber: string;
  userType?: number;
}

/**
 * 出参明细:
 */
export interface FlowObtainLoginVerificationCodeResults {
}

/**
 * 获取登录验证码
 * @com.horsecoder.identity/FLOW_OBTAIN_LOGIN_VERIFICATION_CODE
 */
export const flowObtainLoginVerificationCode = async (params: FlowObtainLoginVerificationCodeParams): StandardPromise<FlowObtainLoginVerificationCodeResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_OBTAIN_LOGIN_VERIFICATION_CODE',
      params: { ...params },
    },
  });
};


export const flowObtainLoginVerificationCodeFacade = async (params: FlowObtainLoginVerificationCodeParams): Promise<FlowObtainLoginVerificationCodeResults> => {
  const { data: { value } } =  await flowObtainLoginVerificationCode(params);
  return value;
};