import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { IMConversationMessage } from '@/flows/com.horsecoder.im/RetrieveConversationInformationAndLastMessageBasedOnConversationId/types/IMConversationMessage';

/**
 * 入参明细:
 * dialogueIdList 对话id列表
 */
export interface FlowRetrieveConversationInformationAndLastMessageBasedOnConversationIdParams {
  dialogueIdList?: string[];
}

/**
 * 出参明细:
 * iMConversationMessageDetails IM会话消息详情
 */
export interface FlowRetrieveConversationInformationAndLastMessageBasedOnConversationIdResults {
  iMConversationMessageDetails?: IMConversationMessage[];
}

/**
 * 根据对话id查询对话信息及最后一条消息
 * @com.horsecoder.im/FLOW_RETRIEVE_CONVERSATION_INFORMATION_AND_LAST_MESSAGE_BASED_ON_CONVERSATION_ID
 */
export const flowRetrieveConversationInformationAndLastMessageBasedOnConversationId = async (params: FlowRetrieveConversationInformationAndLastMessageBasedOnConversationIdParams): StandardPromise<FlowRetrieveConversationInformationAndLastMessageBasedOnConversationIdResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_RETRIEVE_CONVERSATION_INFORMATION_AND_LAST_MESSAGE_BASED_ON_CONVERSATION_ID',
      params: { ...params },
    },
  });
};


export const flowRetrieveConversationInformationAndLastMessageBasedOnConversationIdFacade = async (params: FlowRetrieveConversationInformationAndLastMessageBasedOnConversationIdParams): Promise<FlowRetrieveConversationInformationAndLastMessageBasedOnConversationIdResults> => {
  const { data: { value } } =  await flowRetrieveConversationInformationAndLastMessageBasedOnConversationId(params);
  return value;
};