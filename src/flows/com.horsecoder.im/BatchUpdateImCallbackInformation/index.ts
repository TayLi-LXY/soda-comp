import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { BatchUpdateIMEntities } from '@/flows/com.horsecoder.im/BatchUpdateImCallbackInformation/types/BatchUpdateIMEntities';

/**
 * 入参明细:
 * batchUpdateIMEntities 批量更新im实体
 */
export interface FlowBatchUpdateImCallbackInformationParams {
  batchUpdateIMEntities?: BatchUpdateIMEntities[];
}

/**
 * 出参明细:
 */
export interface FlowBatchUpdateImCallbackInformationResults {
}

/**
 * 批量更新Im回调信息
 * @com.horsecoder.im/FLOW_BATCH_UPDATE_IM_CALLBACK_INFORMATION
 */
export const flowBatchUpdateImCallbackInformation = async (params: FlowBatchUpdateImCallbackInformationParams): StandardPromise<FlowBatchUpdateImCallbackInformationResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_BATCH_UPDATE_IM_CALLBACK_INFORMATION',
      params: { ...params },
    },
  });
};


export const flowBatchUpdateImCallbackInformationFacade = async (params: FlowBatchUpdateImCallbackInformationParams): Promise<FlowBatchUpdateImCallbackInformationResults> => {
  const { data: { value } } =  await flowBatchUpdateImCallbackInformation(params);
  return value;
};