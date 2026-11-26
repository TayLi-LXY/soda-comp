import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 * payType 支付类型
 * price 价格
 */
export interface FlowSubscriptionSignUpParams {
  accountId: string;
  payType: number;
  price: any;
}

/**
 * 出参明细:
 * userSubscriptionId 用户订阅ID
 * signingURL 签约URL
 * trialEnd 到期时间
 */
export interface FlowSubscriptionSignUpResults {
  userSubscriptionId: string;
  signingURL: string;
  trialEnd: number;
}

/**
 * 开通订阅
 * @com.horsecoder.pay/FLOW_SUBSCRIPTION_SIGN_UP
 */
export const flowSubscriptionSignUp = async (params: FlowSubscriptionSignUpParams): StandardPromise<FlowSubscriptionSignUpResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_SUBSCRIPTION_SIGN_UP',
      params: { ...params },
    },
  });
};


export const flowSubscriptionSignUpFacade = async (params: FlowSubscriptionSignUpParams): Promise<FlowSubscriptionSignUpResults> => {
  const { data: { value } } =  await flowSubscriptionSignUp(params);
  return value;
};