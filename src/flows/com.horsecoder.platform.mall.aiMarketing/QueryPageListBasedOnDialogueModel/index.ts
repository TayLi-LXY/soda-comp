import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelJsonModel } from '@/flows/com.horsecoder.model/NewModelJson/types/ModelJsonModel';

/**
 * 入参明细:
 * dialogueModelId 对话模型ID
 * modelId 模型ID
 */
export interface FlowQueryPageListBasedOnDialogueModelParams {
  dialogueModelId: string;
  modelId: string;
}

/**
 * 出参明细:
 * modelJsonModelList 模型文件模型列表
 */
export interface FlowQueryPageListBasedOnDialogueModelResults {
  modelJsonModelList: ModelJsonModel[];
}

/**
 * 根据对话模型查询页面列表
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_PAGE_LIST_BASED_ON_DIALOGUE_MODEL
 */
export const flowQueryPageListBasedOnDialogueModel = async (params: FlowQueryPageListBasedOnDialogueModelParams): StandardPromise<FlowQueryPageListBasedOnDialogueModelResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_PAGE_LIST_BASED_ON_DIALOGUE_MODEL',
      params: { ...params },
    },
  });
};


export const flowQueryPageListBasedOnDialogueModelFacade = async (params: FlowQueryPageListBasedOnDialogueModelParams): Promise<FlowQueryPageListBasedOnDialogueModelResults> => {
  const { data: { value } } =  await flowQueryPageListBasedOnDialogueModel(params);
  return value;
};