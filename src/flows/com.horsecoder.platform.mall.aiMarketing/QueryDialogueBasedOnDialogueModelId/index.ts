import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * dialogueModelId 对话模型ID
 */
export interface FlowQueryDialogueBasedOnDialogueModelIdParams {
  dialogueModelId: string;
}

/**
 * 出参明细:
 * conversationId 对话ID
 */
export interface FlowQueryDialogueBasedOnDialogueModelIdResults {
  conversationId?: string;
}

/**
 * 根据对话模型ID查询对话
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_BASED_ON_DIALOGUE_MODEL_ID
 */
export const flowQueryDialogueBasedOnDialogueModelId = async (params: FlowQueryDialogueBasedOnDialogueModelIdParams): StandardPromise<FlowQueryDialogueBasedOnDialogueModelIdResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_BASED_ON_DIALOGUE_MODEL_ID',
      params: { ...params },
    },
  });
};


export const flowQueryDialogueBasedOnDialogueModelIdFacade = async (params: FlowQueryDialogueBasedOnDialogueModelIdParams): Promise<FlowQueryDialogueBasedOnDialogueModelIdResults> => {
  const { data: { value } } =  await flowQueryDialogueBasedOnDialogueModelId(params);
  return value;
};