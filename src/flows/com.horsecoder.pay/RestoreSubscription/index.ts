import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 */
export interface FlowRestoreSubscriptionParams {
  accountId: string;
}

/**
 * 出参明细:
 * recoveryResults 恢复结果
 */
export interface FlowRestoreSubscriptionResults {
  recoveryResults: string;
}

/**
 * 恢复订阅
 * @com.horsecoder.pay/FLOW_RESTORE_SUBSCRIPTION
 */
export const flowRestoreSubscription = async (params: FlowRestoreSubscriptionParams): StandardPromise<FlowRestoreSubscriptionResults> => {
  return request('/horsecoder-pay/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.pay/FLOW_RESTORE_SUBSCRIPTION',
      params: { ...params },
    },
  });
};


export const flowRestoreSubscriptionFacade = async (params: FlowRestoreSubscriptionParams): Promise<FlowRestoreSubscriptionResults> => {
  const { data: { value } } =  await flowRestoreSubscription(params);
  return value;
};