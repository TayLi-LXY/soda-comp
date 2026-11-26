import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * dialogueModelId 对话模型ID
 * modelId 模型ID
 */
export interface FlowQueryCoreModelListBasedOnDialogueModelParams {
  dialogueModelId: string;
  modelId: string;
}

/**
 * 出参明细:
 * coreModel 核心模型
 */
export interface FlowQueryCoreModelListBasedOnDialogueModelResults {
  coreModel: any;
}

/**
 * 根据对话模型查询核心模型列表
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CORE_MODEL_LIST_BASED_ON_DIALOGUE_MODEL
 */
export const flowQueryCoreModelListBasedOnDialogueModel = async (params: FlowQueryCoreModelListBasedOnDialogueModelParams): StandardPromise<FlowQueryCoreModelListBasedOnDialogueModelResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CORE_MODEL_LIST_BASED_ON_DIALOGUE_MODEL',
      params: { ...params },
    },
  });
};


export const flowQueryCoreModelListBasedOnDialogueModelFacade = async (params: FlowQueryCoreModelListBasedOnDialogueModelParams): Promise<FlowQueryCoreModelListBasedOnDialogueModelResults> => {
  const { data: { value } } =  await flowQueryCoreModelListBasedOnDialogueModel(params);
  return value;
};