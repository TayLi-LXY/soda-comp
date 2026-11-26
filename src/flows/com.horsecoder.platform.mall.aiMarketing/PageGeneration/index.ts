import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ConfiguredPagesJson } from '@/flows/com.horsecoder.platform.mall.aiMarketing/PageGeneration/types/ConfiguredPagesJson';

/**
 * 入参明细:
 * requirementReportUrl 需求分析报告
 * pageFocusDescription 设计重点
 */
export interface FlowPageGenerationParams {
  requirementReportUrl: string;
  pageFocusDescription?: string;
}

/**
 * 出参明细:
 * configuredPagesJsonResult 完整配置的页面JSON结果
 */
export interface FlowPageGenerationResults {
  configuredPagesJsonResult: ConfiguredPagesJson;
}

/**
 * 页面生成
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_PAGE_GENERATION
 */
export const flowPageGeneration = async (params: FlowPageGenerationParams): StandardPromise<FlowPageGenerationResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_PAGE_GENERATION',
      params: { ...params },
    },
  });
};


export const flowPageGenerationFacade = async (params: FlowPageGenerationParams): Promise<FlowPageGenerationResults> => {
  const { data: { value } } =  await flowPageGeneration(params);
  return value;
};