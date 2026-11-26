import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * modelId 模型ID
 * spaceId 空间ID
 * spaceOrganizeId 空间组织ID
 */
export interface FlowUpdateModelSpaceParams {
  modelId: string;
  spaceId: string;
  spaceOrganizeId: string;
}

/**
 * 出参明细:
 */
export interface FlowUpdateModelSpaceResults {
}

/**
 * 更新模型空间
 * @com.horsecoder.model/FLOW_UPDATE_MODEL_SPACE
 */
export const flowUpdateModelSpace = async (params: FlowUpdateModelSpaceParams): StandardPromise<FlowUpdateModelSpaceResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_UPDATE_MODEL_SPACE',
      params: { ...params },
    },
  });
};


export const flowUpdateModelSpaceFacade = async (params: FlowUpdateModelSpaceParams): Promise<FlowUpdateModelSpaceResults> => {
  const { data: { value } } =  await flowUpdateModelSpace(params);
  return value;
};