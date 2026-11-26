import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { RequirementAnalysisReport } from '@/flows/com.horsecoder.platform.mall.aiMarketing/RequirementAnalysis/types/RequirementAnalysisReport';

/**
 * 入参明细:
 * requirementDescription 需求描述
 */
export interface FlowRequirementAnalysisParams {
  requirementDescription: string;
}

/**
 * 出参明细:
 * requirementAnalysisReportResult 需求分析报告结果
 */
export interface FlowRequirementAnalysisResults {
  requirementAnalysisReportResult: RequirementAnalysisReport;
}

/**
 * 需求分析
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_REQUIREMENT_ANALYSIS
 */
export const flowRequirementAnalysis = async (params: FlowRequirementAnalysisParams): StandardPromise<FlowRequirementAnalysisResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_REQUIREMENT_ANALYSIS',
      params: { ...params },
    },
  });
};


export const flowRequirementAnalysisFacade = async (params: FlowRequirementAnalysisParams): Promise<FlowRequirementAnalysisResults> => {
  const { data: { value } } =  await flowRequirementAnalysis(params);
  return value;
};