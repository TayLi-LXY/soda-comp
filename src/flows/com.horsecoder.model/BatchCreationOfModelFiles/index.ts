import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelJsonModel } from '@/flows/com.horsecoder.model/BatchCreationOfModelFiles/types/ModelJsonModel';
import type { ModelJsonContainsOld } from '@/flows/com.horsecoder.model/BatchCreationOfModelFiles/types/ModelJsonContainsOld';

/**
 * 入参明细:
 * modelJsonModelList 模型文件模型列表
 */
export interface FlowBatchCreationOfModelFilesParams {
  modelJsonModelList: ModelJsonModel[];
}

/**
 * 出参明细:
 * modelJsonModelList 模型文件模型列表
 */
export interface FlowBatchCreationOfModelFilesResults {
  modelJsonModelList: ModelJsonContainsOld[];
}

/**
 * 批量创建模型文件
 * @com.horsecoder.model/FLOW_BATCH_CREATION_OF_MODEL_FILES
 */
export const flowBatchCreationOfModelFiles = async (params: FlowBatchCreationOfModelFilesParams): StandardPromise<FlowBatchCreationOfModelFilesResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_BATCH_CREATION_OF_MODEL_FILES',
      params: { ...params },
    },
  });
};


export const flowBatchCreationOfModelFilesFacade = async (params: FlowBatchCreationOfModelFilesParams): Promise<FlowBatchCreationOfModelFilesResults> => {
  const { data: { value } } =  await flowBatchCreationOfModelFiles(params);
  return value;
};