import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { UserLoginResult } from '@/flows/com.horsecoder.identity/Login/types/UserLoginResult';

/**
 * 入参明细:
 * username 用户名
 * password 密码
 * captcha 验证码
 */
export interface FlowLoginParams {
  username: string;
  password: string;
  captcha?: string;
}

/**
 * 出参明细:
 * userInfo 用户信息
 * token token
 */
export interface FlowLoginResults {
  userInfo: UserLoginResult;
  token: string;
}

/**
 * 登录
 * @com.horsecoder.identity/FLOW_LOGIN
 */
export const flowLogin = async (params: FlowLoginParams): StandardPromise<FlowLoginResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_LOGIN',
      params: { ...params },
    },
  });
};


export const flowLoginFacade = async (params: FlowLoginParams): Promise<FlowLoginResults> => {
  const { data: { value } } =  await flowLogin(params);
  return value;
};