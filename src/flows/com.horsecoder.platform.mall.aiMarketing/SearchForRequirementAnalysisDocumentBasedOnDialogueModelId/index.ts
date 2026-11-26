import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * dialogueModelId 对话模型ID
 */
export interface FlowSearchForRequirementAnalysisDocumentBasedOnDialogueModelIdParams {
  dialogueModelId: string;
}

/**
 * 出参明细:
 * requirementReportUrl 需求分析报告
 */
export interface FlowSearchForRequirementAnalysisDocumentBasedOnDialogueModelIdResults {
  requirementReportUrl: string;
}

/**
 * 根据对话模型ID查找需求分析文档
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_SEARCH_FOR_REQUIREMENT_ANALYSIS_DOCUMENT_BASED_ON_DIALOGUE_MODEL_ID
 */
export const flowSearchForRequirementAnalysisDocumentBasedOnDialogueModelId = async (params: FlowSearchForRequirementAnalysisDocumentBasedOnDialogueModelIdParams): StandardPromise<FlowSearchForRequirementAnalysisDocumentBasedOnDialogueModelIdResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_SEARCH_FOR_REQUIREMENT_ANALYSIS_DOCUMENT_BASED_ON_DIALOGUE_MODEL_ID',
      params: { ...params },
    },
  });
};


export const flowSearchForRequirementAnalysisDocumentBasedOnDialogueModelIdFacade = async (params: FlowSearchForRequirementAnalysisDocumentBasedOnDialogueModelIdParams): Promise<FlowSearchForRequirementAnalysisDocumentBasedOnDialogueModelIdResults> => {
  const { data: { value } } =  await flowSearchForRequirementAnalysisDocumentBasedOnDialogueModelId(params);
  return value;
};