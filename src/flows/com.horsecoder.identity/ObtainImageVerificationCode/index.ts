import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * mobilePhoneNumber 手机号
 */
export interface FlowObtainImageVerificationCodeParams {
  mobilePhoneNumber?: string;
}

/**
 * 出参明细:
 * imageBase64 图片base64
 * verificationCodeText 验证码文本
 */
export interface FlowObtainImageVerificationCodeResults {
  imageBase64: string;
  verificationCodeText: string;
}

/**
 * 获取图片验证码
 * @com.horsecoder.identity/FLOW_OBTAIN_IMAGE_VERIFICATION_CODE
 */
export const flowObtainImageVerificationCode = async (params: FlowObtainImageVerificationCodeParams): StandardPromise<FlowObtainImageVerificationCodeResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_OBTAIN_IMAGE_VERIFICATION_CODE',
      params: { ...params },
    },
  });
};


export const flowObtainImageVerificationCodeFacade = async (params: FlowObtainImageVerificationCodeParams): Promise<FlowObtainImageVerificationCodeResults> => {
  const { data: { value } } =  await flowObtainImageVerificationCode(params);
  return value;
};