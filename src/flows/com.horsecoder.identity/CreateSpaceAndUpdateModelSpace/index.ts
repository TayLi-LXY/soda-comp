import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * creatorId 创建人ID
 * name 空间名称
 * title 空间标题
 * type 空间类型
 * businessType 行业
 * businessScenario 业务场景
 * businessScale 业务规模
 * finished 是否完成填写
 * modelId 模型ID
 */
export interface FlowCreateSpaceAndUpdateModelSpaceParams {
  creatorId: string;
  name: string;
  title: string;
  type: string;
  businessType?: string;
  businessScenario?: string;
  businessScale?: string;
  finished: number;
  modelId: string;
}

/**
 * 出参明细:
 */
export interface FlowCreateSpaceAndUpdateModelSpaceResults {
}

/**
 * 创建空间并更新模型空间
 * @com.horsecoder.identity/FLOW_CREATE_SPACE_AND_UPDATE_MODEL_SPACE
 */
export const flowCreateSpaceAndUpdateModelSpace = async (params: FlowCreateSpaceAndUpdateModelSpaceParams): StandardPromise<FlowCreateSpaceAndUpdateModelSpaceResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_CREATE_SPACE_AND_UPDATE_MODEL_SPACE',
      params: { ...params },
    },
  });
};


export const flowCreateSpaceAndUpdateModelSpaceFacade = async (params: FlowCreateSpaceAndUpdateModelSpaceParams): Promise<FlowCreateSpaceAndUpdateModelSpaceResults> => {
  const { data: { value } } =  await flowCreateSpaceAndUpdateModelSpace(params);
  return value;
};