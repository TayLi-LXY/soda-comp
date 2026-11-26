import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * imUserId IM发送用户ID
 * recipientIdList 接收人ID列表
 * type 对话类型
 * status 状态
 * name 名字
 */
export interface FlowImUserCreateSessionsAndConversationsParams {
  imUserId: string;
  recipientIdList: string[];
  type?: number;
  status?: number;
  name: string;
}

/**
 * 出参明细:
 * imUserConversationId IM用户对话ID
 * imConversationId IM会话Id
 */
export interface FlowImUserCreateSessionsAndConversationsResults {
  imUserConversationId: string;
  imConversationId: string;
}

/**
 * IM用户创建会话和对话
 * @com.horsecoder.im/FLOW_IM_USER_CREATE_SESSIONS_AND_CONVERSATIONS
 */
export const flowImUserCreateSessionsAndConversations = async (params: FlowImUserCreateSessionsAndConversationsParams): StandardPromise<FlowImUserCreateSessionsAndConversationsResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_IM_USER_CREATE_SESSIONS_AND_CONVERSATIONS',
      params: { ...params },
    },
  });
};


export const flowImUserCreateSessionsAndConversationsFacade = async (params: FlowImUserCreateSessionsAndConversationsParams): Promise<FlowImUserCreateSessionsAndConversationsResults> => {
  const { data: { value } } =  await flowImUserCreateSessionsAndConversations(params);
  return value;
};