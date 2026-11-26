import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * mobilePhoneNumber 手机号
 * usage 用途
 */
export interface FlowObtainingVerificationCodesWithoutVerifyingUsersParams {
  mobilePhoneNumber: string;
  usage: string;
}

/**
 * 出参明细:
 */
export interface FlowObtainingVerificationCodesWithoutVerifyingUsersResults {
}

/**
 * 获取验证码不校验用户
 * @com.horsecoder.identity/FLOW_OBTAINING_VERIFICATION_CODES_WITHOUT_VERIFYING_USERS
 */
export const flowObtainingVerificationCodesWithoutVerifyingUsers = async (params: FlowObtainingVerificationCodesWithoutVerifyingUsersParams): StandardPromise<FlowObtainingVerificationCodesWithoutVerifyingUsersResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_OBTAINING_VERIFICATION_CODES_WITHOUT_VERIFYING_USERS',
      params: { ...params },
    },
  });
};


export const flowObtainingVerificationCodesWithoutVerifyingUsersFacade = async (params: FlowObtainingVerificationCodesWithoutVerifyingUsersParams): Promise<FlowObtainingVerificationCodesWithoutVerifyingUsersResults> => {
  const { data: { value } } =  await flowObtainingVerificationCodesWithoutVerifyingUsers(params);
  return value;
};