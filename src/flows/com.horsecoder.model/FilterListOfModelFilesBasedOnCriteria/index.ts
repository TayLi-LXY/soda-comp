import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelFileFiltering } from '@/flows/com.horsecoder.model/FilterListOfModelFilesBasedOnCriteria/types/ModelFileFiltering';
import type { ModelJsonModel } from '@/flows/com.horsecoder.model/NewModelJson/types/ModelJsonModel';

/**
 * 入参明细:
 * modelFileFiltering 模型文件筛选
 */
export interface FlowFilterListOfModelFilesBasedOnCriteriaParams {
  modelFileFiltering: ModelFileFiltering;
}

/**
 * 出参明细:
 * modelJsonModelList 模型文件模型列表
 */
export interface FlowFilterListOfModelFilesBasedOnCriteriaResults {
  modelJsonModelList: ModelJsonModel[];
}

/**
 * 根据条件筛选模型文件列表
 * @com.horsecoder.model/FLOW_FILTER_LIST_OF_MODEL_FILES_BASED_ON_CRITERIA
 */
export const flowFilterListOfModelFilesBasedOnCriteria = async (params: FlowFilterListOfModelFilesBasedOnCriteriaParams): StandardPromise<FlowFilterListOfModelFilesBasedOnCriteriaResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_FILTER_LIST_OF_MODEL_FILES_BASED_ON_CRITERIA',
      params: { ...params },
    },
  });
};


export const flowFilterListOfModelFilesBasedOnCriteriaFacade = async (params: FlowFilterListOfModelFilesBasedOnCriteriaParams): Promise<FlowFilterListOfModelFilesBasedOnCriteriaResults> => {
  const { data: { value } } =  await flowFilterListOfModelFilesBasedOnCriteria(params);
  return value;
};