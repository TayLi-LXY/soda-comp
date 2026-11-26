import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * conversationId 对话ID
 * modelId 模型ID
 */
export interface FlowDetermineWhetherCurrentConversationAndDialogueModelExistParams {
  conversationId: string;
  modelId?: string;
}

/**
 * 出参明细:
 * doesItExist 是否存在
 */
export interface FlowDetermineWhetherCurrentConversationAndDialogueModelExistResults {
  doesItExist?: any;
}

/**
 * 判断当前对话和对话模型是否存在
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_DETERMINE_WHETHER_CURRENT_CONVERSATION_AND_DIALOGUE_MODEL_EXIST
 */
export const flowDetermineWhetherCurrentConversationAndDialogueModelExist = async (params: FlowDetermineWhetherCurrentConversationAndDialogueModelExistParams): StandardPromise<FlowDetermineWhetherCurrentConversationAndDialogueModelExistResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_DETERMINE_WHETHER_CURRENT_CONVERSATION_AND_DIALOGUE_MODEL_EXIST',
      params: { ...params },
    },
  });
};


export const flowDetermineWhetherCurrentConversationAndDialogueModelExistFacade = async (params: FlowDetermineWhetherCurrentConversationAndDialogueModelExistParams): Promise<FlowDetermineWhetherCurrentConversationAndDialogueModelExistResults> => {
  const { data: { value } } =  await flowDetermineWhetherCurrentConversationAndDialogueModelExist(params);
  return value;
};