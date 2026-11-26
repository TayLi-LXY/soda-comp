import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CreateDialogueEntity } from '@/flows/com.horsecoder.platform.mall.aiMarketing/CreateAConversation/types/CreateDialogueEntity';

/**
 * 入参明细:
 * createDialogueEntity 创建对话实体
 */
export interface FlowCreateAConversationParams {
  createDialogueEntity?: CreateDialogueEntity;
}

/**
 * 出参明细:
 * conversationId 对话ID
 * dialogueDetailsId 对话详情ID
 */
export interface FlowCreateAConversationResults {
  conversationId?: string;
  dialogueDetailsId: string;
}

/**
 * 创建对话
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_CREATE_A_CONVERSATION
 */
export const flowCreateAConversation = async (params: FlowCreateAConversationParams): StandardPromise<FlowCreateAConversationResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_CREATE_A_CONVERSATION',
      params: { ...params },
    },
  });
};


export const flowCreateAConversationFacade = async (params: FlowCreateAConversationParams): Promise<FlowCreateAConversationResults> => {
  const { data: { value } } =  await flowCreateAConversation(params);
  return value;
};