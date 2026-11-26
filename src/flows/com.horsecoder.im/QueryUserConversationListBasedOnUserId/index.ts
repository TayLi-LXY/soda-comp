import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Id } from '@/flows/com.horsecoder.im/QueryUserConversationListBasedOnUserId/types/Id';
import type { ImConversationId } from '@/flows/com.horsecoder.im/QueryUserConversationListBasedOnUserId/types/ImConversationId';

/**
 * 入参明细:
 * id IM用户ID
 * iMCloneUserId IM分身用户ID
 */
export interface FlowQueryUserConversationListBasedOnUserIdParams {
  id?: Id;
  iMCloneUserId?: Id;
}

/**
 * 出参明细:
 * userDialogueList 用户对话列表
 */
export interface FlowQueryUserConversationListBasedOnUserIdResults {
  userDialogueList?: ImConversationId[];
}

/**
 * 根据用户ID查询用户对话列表
 * @com.horsecoder.im/FLOW_QUERY_USER_CONVERSATION_LIST_BASED_ON_USER_ID
 */
export const flowQueryUserConversationListBasedOnUserId = async (params: FlowQueryUserConversationListBasedOnUserIdParams): StandardPromise<FlowQueryUserConversationListBasedOnUserIdResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_QUERY_USER_CONVERSATION_LIST_BASED_ON_USER_ID',
      params: { ...params },
    },
  });
};


export const flowQueryUserConversationListBasedOnUserIdFacade = async (params: FlowQueryUserConversationListBasedOnUserIdParams): Promise<FlowQueryUserConversationListBasedOnUserIdResults> => {
  const { data: { value } } =  await flowQueryUserConversationListBasedOnUserId(params);
  return value;
};