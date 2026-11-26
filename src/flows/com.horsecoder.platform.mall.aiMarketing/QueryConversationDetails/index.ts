import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueFilter } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryConversationDetails/types/DialogueFilter';
import type { DialogueDetail } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryConversationDetails/types/DialogueDetail';

/**
 * 入参明细:
 * dialogueFilter 对话Filter
 * userId 用户ID
 */
export interface FlowQueryConversationDetailsParams {
  dialogueFilter?: DialogueFilter;
  userId: string;
}

/**
 * 出参明细:
 * dialogueDetailsList 对话详情列表
 */
export interface FlowQueryConversationDetailsResults {
  dialogueDetailsList?: DialogueDetail[];
}

/**
 * 查询对话详情
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CONVERSATION_DETAILS
 */
export const flowQueryConversationDetails = async (params: FlowQueryConversationDetailsParams): StandardPromise<FlowQueryConversationDetailsResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CONVERSATION_DETAILS',
      params: { ...params },
    },
  });
};


export const flowQueryConversationDetailsFacade = async (params: FlowQueryConversationDetailsParams): Promise<FlowQueryConversationDetailsResults> => {
  const { data: { value } } =  await flowQueryConversationDetails(params);
  return value;
};