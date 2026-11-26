import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AccountResult } from '@/flows/com.horsecoder.platform.permission/QueryAccountBasedOnAccountId/types/AccountResult';
import type { LoggedinUser } from '@/flows/com.horsecoder.identity/UserLoginVerification/types/LoggedinUser';

/**
 * 入参明细:
 * token token
 * userId 用户ID
 */
export interface FlowUserLoginVerificationParams {
  token: string;
  userId: string;
}

/**
 * 出参明细:
 * loginStatus 登录状态
 * accountResult 账户结果
 * loggedinUser 登录用户
 */
export interface FlowUserLoginVerificationResults {
  loginStatus: any;
  accountResult: AccountResult;
  loggedinUser?: LoggedinUser;
}

/**
 * 用户登录校验
 * @com.horsecoder.identity/FLOW_USER_LOGIN_VERIFICATION
 */
export const flowUserLoginVerification = async (params: FlowUserLoginVerificationParams): StandardPromise<FlowUserLoginVerificationResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_USER_LOGIN_VERIFICATION',
      params: { ...params },
    },
  });
};


export const flowUserLoginVerificationFacade = async (params: FlowUserLoginVerificationParams): Promise<FlowUserLoginVerificationResults> => {
  const { data: { value } } =  await flowUserLoginVerification(params);
  return value;
};