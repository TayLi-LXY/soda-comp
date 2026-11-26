import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueAccountDetails } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryConversationAccountDetailsBasedOnId/types/DialogueAccountDetails';

/**
 * 入参明细:
 * dialogueAccountId 对话账户ID
 */
export interface FlowQueryConversationAccountDetailsBasedOnIdParams {
  dialogueAccountId: string;
}

/**
 * 出参明细:
 * dialogueAccountDetails 对话账户详情
 */
export interface FlowQueryConversationAccountDetailsBasedOnIdResults {
  dialogueAccountDetails?: DialogueAccountDetails;
}

/**
 * 根据ID查询对话账户详情
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CONVERSATION_ACCOUNT_DETAILS_BASED_ON_ID
 */
export const flowQueryConversationAccountDetailsBasedOnId = async (params: FlowQueryConversationAccountDetailsBasedOnIdParams): StandardPromise<FlowQueryConversationAccountDetailsBasedOnIdResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CONVERSATION_ACCOUNT_DETAILS_BASED_ON_ID',
      params: { ...params },
    },
  });
};


export const flowQueryConversationAccountDetailsBasedOnIdFacade = async (params: FlowQueryConversationAccountDetailsBasedOnIdParams): Promise<FlowQueryConversationAccountDetailsBasedOnIdResults> => {
  const { data: { value } } =  await flowQueryConversationAccountDetailsBasedOnId(params);
  return value;
};