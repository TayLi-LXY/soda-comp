import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * dialogueAccountId 对话账户ID
 */
export interface FlowGetLatestNewsBasedOnConversationAccountIdParams {
  dialogueAccountId: string;
}

/**
 * 出参明细:
 * latestNews 最新消息
 */
export interface FlowGetLatestNewsBasedOnConversationAccountIdResults {
  latestNews?: string;
}

/**
 * 根据对话账户ID获取最新消息
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_GET_LATEST_NEWS_BASED_ON_CONVERSATION_ACCOUNT_ID
 */
export const flowGetLatestNewsBasedOnConversationAccountId = async (params: FlowGetLatestNewsBasedOnConversationAccountIdParams): StandardPromise<FlowGetLatestNewsBasedOnConversationAccountIdResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_GET_LATEST_NEWS_BASED_ON_CONVERSATION_ACCOUNT_ID',
      params: { ...params },
    },
  });
};


export const flowGetLatestNewsBasedOnConversationAccountIdFacade = async (params: FlowGetLatestNewsBasedOnConversationAccountIdParams): Promise<FlowGetLatestNewsBasedOnConversationAccountIdResults> => {
  const { data: { value } } =  await flowGetLatestNewsBasedOnConversationAccountId(params);
  return value;
};