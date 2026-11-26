import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * projectId 项目ID
 */
export interface FlowObtainModelIdBasedOnProjectIdParams {
  projectId: string;
}

/**
 * 出参明细:
 * modelId 模型ID
 */
export interface FlowObtainModelIdBasedOnProjectIdResults {
  modelId: string;
}

/**
 * 根据项目ID获取模型ID
 * @com.horsecoder.model/FLOW_OBTAIN_MODEL_ID_BASED_ON_PROJECT_ID
 */
export const flowObtainModelIdBasedOnProjectId = async (params: FlowObtainModelIdBasedOnProjectIdParams): StandardPromise<FlowObtainModelIdBasedOnProjectIdResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_OBTAIN_MODEL_ID_BASED_ON_PROJECT_ID',
      params: { ...params },
    },
  });
};


export const flowObtainModelIdBasedOnProjectIdFacade = async (params: FlowObtainModelIdBasedOnProjectIdParams): Promise<FlowObtainModelIdBasedOnProjectIdResults> => {
  const { data: { value } } =  await flowObtainModelIdBasedOnProjectId(params);
  return value;
};