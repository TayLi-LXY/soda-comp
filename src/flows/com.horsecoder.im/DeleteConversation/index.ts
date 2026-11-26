import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * sessionId 会话Id
 */
export interface FlowDeleteConversationParams {
  sessionId: string;
}

/**
 * 出参明细:
 */
export interface FlowDeleteConversationResults {
}

/**
 * 删除对话
 * @com.horsecoder.im/FLOW_DELETE_CONVERSATION
 */
export const flowDeleteConversation = async (params: FlowDeleteConversationParams): StandardPromise<FlowDeleteConversationResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_DELETE_CONVERSATION',
      params: { ...params },
    },
  });
};


export const flowDeleteConversationFacade = async (params: FlowDeleteConversationParams): Promise<FlowDeleteConversationResults> => {
  const { data: { value } } =  await flowDeleteConversation(params);
  return value;
};