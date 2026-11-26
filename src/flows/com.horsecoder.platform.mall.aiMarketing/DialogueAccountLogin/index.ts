import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { UserLoginResult } from '@/flows/com.horsecoder.identity/Login/types/UserLoginResult';

/**
 * 入参明细:
 * cellphoneNumber 手机号
 * password 密码
 */
export interface FlowDialogueAccountLoginParams {
  cellphoneNumber: string;
  password: string;
}

/**
 * 出参明细:
 * userInfo 用户信息
 */
export interface FlowDialogueAccountLoginResults {
  userInfo: UserLoginResult;
}

/**
 * 对话账户登录
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_DIALOGUE_ACCOUNT_LOGIN
 */
export const flowDialogueAccountLogin = async (params: FlowDialogueAccountLoginParams): StandardPromise<FlowDialogueAccountLoginResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_DIALOGUE_ACCOUNT_LOGIN',
      params: { ...params },
    },
  });
};


export const flowDialogueAccountLoginFacade = async (params: FlowDialogueAccountLoginParams): Promise<FlowDialogueAccountLoginResults> => {
  const { data: { value } } =  await flowDialogueAccountLogin(params);
  return value;
};