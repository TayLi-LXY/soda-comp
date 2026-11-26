import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ProjectNameReturn } from '@/flows/com.horsecoder.platform.mall.aiMarketing/ProjectNameIdentification/types/ProjectNameReturn';

/**
 * 入参明细:
 * demand 软件需求
 */
export interface FlowProjectNameIdentificationParams {
  demand: string;
}

/**
 * 出参明细:
 * projectNameReturnResult 项目名称返回结果结果
 */
export interface FlowProjectNameIdentificationResults {
  projectNameReturnResult: ProjectNameReturn;
}

/**
 * 项目名称识别
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_PROJECT_NAME_IDENTIFICATION
 */
export const flowProjectNameIdentification = async (params: FlowProjectNameIdentificationParams): StandardPromise<FlowProjectNameIdentificationResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_PROJECT_NAME_IDENTIFICATION',
      params: { ...params },
    },
  });
};


export const flowProjectNameIdentificationFacade = async (params: FlowProjectNameIdentificationParams): Promise<FlowProjectNameIdentificationResults> => {
  const { data: { value } } =  await flowProjectNameIdentification(params);
  return value;
};