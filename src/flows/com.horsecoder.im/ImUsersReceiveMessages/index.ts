import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Callback } from '@/flows/com.horsecoder.im/ImUsersReceiveMessages/types/Callback';

/**
 * 入参明细:
 * senderId 发送者ID
 * receiverIdList 接收者ID列表
 * message 消息
 * conversationId 会话ID
 * type 类型
 * userConversationId 用户对话ID
 * downstreamKeyword 下游关键词
 * transferType 传输类型
 * sessionId 业务sessionId
 * turn 轮次
 * context 上下文
 * callback 回调
 */
export interface FlowImUsersReceiveMessagesParams {
  senderId: string;
  receiverIdList: string[];
  message: string;
  conversationId: string;
  type: number;
  userConversationId?: string;
  downstreamKeyword: string;
  transferType?: number;
  sessionId?: string;
  turn?: number;
  context?: any;
  callback?: Callback;
}

/**
 * 出参明细:
 */
export interface FlowImUsersReceiveMessagesResults {
}

/**
 * IM用户接收消息
 * @com.horsecoder.im/FLOW_IM_USERS_RECEIVE_MESSAGES
 */
export const flowImUsersReceiveMessages = async (params: FlowImUsersReceiveMessagesParams): StandardPromise<FlowImUsersReceiveMessagesResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_IM_USERS_RECEIVE_MESSAGES',
      params: { ...params },
    },
  });
};


export const flowImUsersReceiveMessagesFacade = async (params: FlowImUsersReceiveMessagesParams): Promise<FlowImUsersReceiveMessagesResults> => {
  const { data: { value } } =  await flowImUsersReceiveMessages(params);
  return value;
};