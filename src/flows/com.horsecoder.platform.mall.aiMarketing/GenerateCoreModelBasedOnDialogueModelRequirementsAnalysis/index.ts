import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * dialogueModelId 对话模型ID
 * dialogueDetailsId 对话详情ID
 * modelId 模型ID
 * lockedBy 锁持有对象
 * status 状态
 */
export interface FlowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysisParams {
  dialogueModelId: string;
  dialogueDetailsId: string;
  modelId: string;
  lockedBy?: string;
  status: number;
}

/**
 * 出参明细:
 */
export interface FlowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysisResults {
}

/**
 * 根据对话模型需求分析生成核心模型
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_GENERATE_CORE_MODEL_BASED_ON_DIALOGUE_MODEL_REQUIREMENTS_ANALYSIS
 */
export const flowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysis = async (params: FlowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysisParams): StandardPromise<FlowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysisResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_GENERATE_CORE_MODEL_BASED_ON_DIALOGUE_MODEL_REQUIREMENTS_ANALYSIS',
      params: { ...params },
    },
  });
};


export const flowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysisFacade = async (params: FlowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysisParams): Promise<FlowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysisResults> => {
  const { data: { value } } =  await flowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysis(params);
  return value;
};