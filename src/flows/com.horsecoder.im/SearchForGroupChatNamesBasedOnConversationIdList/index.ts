import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userDialogueList 用户对话列表
 */
export interface FlowSearchForGroupChatNamesBasedOnConversationIdListParams {
  userDialogueList?: [];
}

/**
 * 出参明细:
 * listOfGroupChatNames 群聊名列表
 */
export interface FlowSearchForGroupChatNamesBasedOnConversationIdListResults {
  listOfGroupChatNames?: [];
}

/**
 * 根据对话ID列表查询群聊名
 * @com.horsecoder.im/FLOW_SEARCH_FOR_GROUP_CHAT_NAMES_BASED_ON_CONVERSATION_ID_LIST
 */
export const flowSearchForGroupChatNamesBasedOnConversationIdList = async (params: FlowSearchForGroupChatNamesBasedOnConversationIdListParams): StandardPromise<FlowSearchForGroupChatNamesBasedOnConversationIdListResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_SEARCH_FOR_GROUP_CHAT_NAMES_BASED_ON_CONVERSATION_ID_LIST',
      params: { ...params },
    },
  });
};


export const flowSearchForGroupChatNamesBasedOnConversationIdListFacade = async (params: FlowSearchForGroupChatNamesBasedOnConversationIdListParams): Promise<FlowSearchForGroupChatNamesBasedOnConversationIdListResults> => {
  const { data: { value } } =  await flowSearchForGroupChatNamesBasedOnConversationIdList(params);
  return value;
};