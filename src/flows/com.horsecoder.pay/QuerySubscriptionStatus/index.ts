import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { SubscriptionInformation } from '@/flows/com.horsecoder.pay/QuerySubscriptionStatus/types/SubscriptionInformation';

/**
 * 入参明细:
 * accountId 账户ID
 */
export interface FlowQuerySubscriptionStatusParams {
  accountId: string;
}

/**
 * 出参明细:
 * subscriptionInformation 订阅信息
 */
export interface FlowQuerySubscriptionStatusResults {
  subscriptionInformation: SubscriptionInformation;
}

/**
 * 查询订阅状态
 * @com.horsecoder.pay/FLOW_QUERY_SUBSCRIPTION_STATUS
 */
export const flowQuerySubscriptionStatus = async (params: FlowQuerySubscriptionStatusParams): StandardPromise<FlowQuerySubscriptionStatusResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_QUERY_SUBSCRIPTION_STATUS',
      params: { ...params },
    },
  });
};


export const flowQuerySubscriptionStatusFacade = async (params: FlowQuerySubscriptionStatusParams): Promise<FlowQuerySubscriptionStatusResults> => {
  const { data: { value } } =  await flowQuerySubscriptionStatus(params);
  return value;
};