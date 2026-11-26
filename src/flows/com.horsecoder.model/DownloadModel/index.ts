import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * modelId 模型id
 */
export interface FlowDownloadModelParams {
  modelId: string;
}

/**
 * 出参明细:
 * coreModel 核心模型
 */
export interface FlowDownloadModelResults {
  coreModel: any;
}

/**
 * 下载模型
 * @com.horsecoder.model/FLOW_DOWNLOAD_MODEL
 */
export const flowDownloadModel = async (params: FlowDownloadModelParams): StandardPromise<FlowDownloadModelResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_DOWNLOAD_MODEL',
      params: { ...params },
    },
  });
};


export const flowDownloadModelFacade = async (params: FlowDownloadModelParams): Promise<FlowDownloadModelResults> => {
  const { data: { value } } =  await flowDownloadModel(params);
  return value;
};