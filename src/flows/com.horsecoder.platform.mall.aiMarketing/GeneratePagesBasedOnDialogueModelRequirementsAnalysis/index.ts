import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelJsonModel } from '@/flows/com.horsecoder.model/BatchCreationOfModelFiles/types/ModelJsonModel';

/**
 * 入参明细:
 * dialogueModelId 对话模型ID
 * dialogueDetailsId 对话详情ID
 * modelId 模型ID
 * lockedBy 锁持有对象
 * targetProduct 目标产品
 */
export interface FlowGeneratePagesBasedOnDialogueModelRequirementsAnalysisParams {
  dialogueModelId: string;
  dialogueDetailsId: string;
  modelId: string;
  lockedBy?: string;
  targetProduct: string;
}

/**
 * 出参明细:
 * modelJsonModelList 模型文件模型列表
 */
export interface FlowGeneratePagesBasedOnDialogueModelRequirementsAnalysisResults {
  modelJsonModelList: ModelJsonModel[];
}

/**
 * 根据对话模型需求分析生成页面
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_GENERATE_PAGES_BASED_ON_DIALOGUE_MODEL_REQUIREMENTS_ANALYSIS
 */
export const flowGeneratePagesBasedOnDialogueModelRequirementsAnalysis = async (params: FlowGeneratePagesBasedOnDialogueModelRequirementsAnalysisParams): StandardPromise<FlowGeneratePagesBasedOnDialogueModelRequirementsAnalysisResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_GENERATE_PAGES_BASED_ON_DIALOGUE_MODEL_REQUIREMENTS_ANALYSIS',
      params: { ...params },
    },
  });
};


export const flowGeneratePagesBasedOnDialogueModelRequirementsAnalysisFacade = async (params: FlowGeneratePagesBasedOnDialogueModelRequirementsAnalysisParams): Promise<FlowGeneratePagesBasedOnDialogueModelRequirementsAnalysisResults> => {
  const { data: { value } } =  await flowGeneratePagesBasedOnDialogueModelRequirementsAnalysis(params);
  return value;
};