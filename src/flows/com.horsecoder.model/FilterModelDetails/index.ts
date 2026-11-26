import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelSelection } from '@/flows/com.horsecoder.model/FilterModelDetails/types/ModelSelection';
import type { ModelModel } from '@/flows/com.horsecoder.model/FilterModelDetails/types/ModelModel';

/**
 * 入参明细:
 * modelSelection 模型筛选
 */
export interface FlowFilterModelDetailsParams {
  modelSelection: ModelSelection;
}

/**
 * 出参明细:
 * modelList 模型列表
 */
export interface FlowFilterModelDetailsResults {
  modelList: ModelModel[];
}

/**
 * 筛选模型详情
 * @com.horsecoder.model/FLOW_FILTER_MODEL_DETAILS
 */
export const flowFilterModelDetails = async (params: FlowFilterModelDetailsParams): StandardPromise<FlowFilterModelDetailsResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_FILTER_MODEL_DETAILS',
      params: { ...params },
    },
  });
};


export const flowFilterModelDetailsFacade = async (params: FlowFilterModelDetailsParams): Promise<FlowFilterModelDetailsResults> => {
  const { data: { value } } =  await flowFilterModelDetails(params);
  return value;
};