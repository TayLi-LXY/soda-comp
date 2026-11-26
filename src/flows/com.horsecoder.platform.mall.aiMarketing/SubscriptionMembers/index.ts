import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * dialogueAccountId 对话账户ID
 * subscriptionTime 订阅时间
 * memberType 会员类型
 * periodOfValidity 有效期
 * addPoints 新增的积分
 * detailsOfPointsChanges 积分变化详情
 */
export interface FlowSubscriptionMembersParams {
  dialogueAccountId: string;
  subscriptionTime: number;
  memberType: number;
  periodOfValidity: number;
  addPoints?: number;
  detailsOfPointsChanges?: string;
}

/**
 * 出参明细:
 * subscriptionResults 订阅结果
 */
export interface FlowSubscriptionMembersResults {
  subscriptionResults?: any;
}

/**
 * 订阅会员
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_SUBSCRIPTION_MEMBERS
 */
export const flowSubscriptionMembers = async (params: FlowSubscriptionMembersParams): StandardPromise<FlowSubscriptionMembersResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_SUBSCRIPTION_MEMBERS',
      params: { ...params },
    },
  });
};


export const flowSubscriptionMembersFacade = async (params: FlowSubscriptionMembersParams): Promise<FlowSubscriptionMembersResults> => {
  const { data: { value } } =  await flowSubscriptionMembers(params);
  return value;
};