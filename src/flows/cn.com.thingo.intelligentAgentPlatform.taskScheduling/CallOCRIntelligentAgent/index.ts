import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * cueWord 提示词
 * picturesLinking 图片链接
 */
export interface FlowCallOCRIntelligentAgentParams {
  cueWord: string;
  picturesLinking: string;
}

/**
 * 出参明细:
 * resultJSON 结果json
 */
export interface FlowCallOCRIntelligentAgentResults {
  resultJSON?: string;
}

/**
 * 调用OCR智能体
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CALL_O_C_R_INTELLIGENT_AGENT
 */
export const flowCallOCRIntelligentAgent = async (params: FlowCallOCRIntelligentAgentParams): StandardPromise<FlowCallOCRIntelligentAgentResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CALL_O_C_R_INTELLIGENT_AGENT',
      params: { ...params },
    },
  });
};


export const flowCallOCRIntelligentAgentFacade = async (params: FlowCallOCRIntelligentAgentParams): Promise<FlowCallOCRIntelligentAgentResults> => {
  const { data: { value } } =  await flowCallOCRIntelligentAgent(params);
  return value;
};