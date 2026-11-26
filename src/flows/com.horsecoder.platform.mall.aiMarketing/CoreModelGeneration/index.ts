import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CoreModelJsonUrl } from '@/flows/com.horsecoder.platform.mall.aiMarketing/CoreModelGeneration/types/CoreModelJsonUrl';

/**
 * 入参明细:
 * requirementReportUrl 需求分析报告
 * targetModuleName 目标业务模块
 * existingModelsJsonUrl 历史模型JSON链接
 * userFeedback 用户修正意见
 */
export interface FlowCoreModelGenerationParams {
  requirementReportUrl: string;
  targetModuleName?: string;
  existingModelsJsonUrl?: string;
  userFeedback?: string;
}

/**
 * 出参明细:
 * coreModelJsonUrlResult 核心模型JSON结果
 */
export interface FlowCoreModelGenerationResults {
  coreModelJsonUrlResult: CoreModelJsonUrl;
}

/**
 * 核心模型生成
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_CORE_MODEL_GENERATION
 */
export const flowCoreModelGeneration = async (params: FlowCoreModelGenerationParams): StandardPromise<FlowCoreModelGenerationResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_CORE_MODEL_GENERATION',
      params: { ...params },
    },
  });
};


export const flowCoreModelGenerationFacade = async (params: FlowCoreModelGenerationParams): Promise<FlowCoreModelGenerationResults> => {
  const { data: { value } } =  await flowCoreModelGeneration(params);
  return value;
};