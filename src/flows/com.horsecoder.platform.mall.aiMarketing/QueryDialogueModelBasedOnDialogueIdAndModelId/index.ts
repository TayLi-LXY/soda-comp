import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueModel } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueModel';

/**
 * 入参明细:
 * dialogueId 对话ID
 * modelId 模型ID
 */
export interface FlowQueryDialogueModelBasedOnDialogueIdAndModelIdParams {
  dialogueId: string;
  modelId: string;
}

/**
 * 出参明细:
 * dialogueModel 对话模型
 */
export interface FlowQueryDialogueModelBasedOnDialogueIdAndModelIdResults {
  dialogueModel: DialogueModel;
}

/**
 * 根据对话ID和模型ID查询对话模型
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_MODEL_BASED_ON_DIALOGUE_ID_AND_MODEL_ID
 */
export const flowQueryDialogueModelBasedOnDialogueIdAndModelId = async (params: FlowQueryDialogueModelBasedOnDialogueIdAndModelIdParams): StandardPromise<FlowQueryDialogueModelBasedOnDialogueIdAndModelIdResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_MODEL_BASED_ON_DIALOGUE_ID_AND_MODEL_ID',
      params: { ...params },
    },
  });
};


export const flowQueryDialogueModelBasedOnDialogueIdAndModelIdFacade = async (params: FlowQueryDialogueModelBasedOnDialogueIdAndModelIdParams): Promise<FlowQueryDialogueModelBasedOnDialogueIdAndModelIdResults> => {
  const { data: { value } } =  await flowQueryDialogueModelBasedOnDialogueIdAndModelId(params);
  return value;
};