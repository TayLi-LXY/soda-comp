import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { UserConversationDetail } from '@/flows/com.horsecoder.im/QueryUserConversationListBasedOnUserIdList/types/UserConversationDetail';

/**
 * 入参明细:
 * userIdList 用户ID列表
 * page page
 * rows rows
 */
export interface FlowQueryUserConversationListBasedOnUserIdListParams {
  userIdList: string[];
  page: number;
  rows: number;
}

/**
 * 出参明细:
 * userConversationDetail 用户对话详情
 */
export interface FlowQueryUserConversationListBasedOnUserIdListResults {
  userConversationDetail: UserConversationDetail[];
}

/**
 * 根据用户ID列表查询用户对话列表
 * @com.horsecoder.im/FLOW_QUERY_USER_CONVERSATION_LIST_BASED_ON_USER_ID_LIST
 */
export const flowQueryUserConversationListBasedOnUserIdList = async (params: FlowQueryUserConversationListBasedOnUserIdListParams): StandardPromise<FlowQueryUserConversationListBasedOnUserIdListResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_QUERY_USER_CONVERSATION_LIST_BASED_ON_USER_ID_LIST',
      params: { ...params },
    },
  });
};


export const flowQueryUserConversationListBasedOnUserIdListFacade = async (params: FlowQueryUserConversationListBasedOnUserIdListParams): Promise<FlowQueryUserConversationListBasedOnUserIdListResults> => {
  const { data: { value } } =  await flowQueryUserConversationListBasedOnUserIdList(params);
  return value;
};