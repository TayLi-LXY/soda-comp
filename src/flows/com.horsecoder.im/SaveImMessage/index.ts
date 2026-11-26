import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { MessageEntity } from '@/flows/com.horsecoder.im/QueryUserConversationListBasedOnUserIdList/types/MessageEntity';

/**
 * 入参明细:
 * senderId 发送人ID
 * conversationId 会话ID
 * message 消息
 */
export interface FlowSaveImMessageParams {
  senderId: string;
  conversationId: string;
  message: MessageEntity;
}

/**
 * 出参明细:
 */
export interface FlowSaveImMessageResults {
}

/**
 * 保存IM消息
 * @com.horsecoder.im/FLOW_SAVE_IM_MESSAGE
 */
export const flowSaveImMessage = async (params: FlowSaveImMessageParams): StandardPromise<FlowSaveImMessageResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_SAVE_IM_MESSAGE',
      params: { ...params },
    },
  });
};


export const flowSaveImMessageFacade = async (params: FlowSaveImMessageParams): Promise<FlowSaveImMessageResults> => {
  const { data: { value } } =  await flowSaveImMessage(params);
  return value;
};