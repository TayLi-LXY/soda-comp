import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * conversationId 对话ID
 */
export interface FlowDeleteConversationBasedOnIdParams {
  conversationId: string;
}

/**
 * 出参明细:
 */
export interface FlowDeleteConversationBasedOnIdResults {
}

/**
 * 根据ID删除对话
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_DELETE_CONVERSATION_BASED_ON_ID
 */
export const flowDeleteConversationBasedOnId = async (params: FlowDeleteConversationBasedOnIdParams): StandardPromise<FlowDeleteConversationBasedOnIdResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_DELETE_CONVERSATION_BASED_ON_ID',
      params: { ...params },
    },
  });
};


export const flowDeleteConversationBasedOnIdFacade = async (params: FlowDeleteConversationBasedOnIdParams): Promise<FlowDeleteConversationBasedOnIdResults> => {
  const { data: { value } } =  await flowDeleteConversationBasedOnId(params);
  return value;
};