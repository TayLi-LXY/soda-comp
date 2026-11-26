import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * directory 文件夹
 * fileName 文件名
 * user 文件用户
 * files 文件数组
 */
export interface FlowBatchUploadFilesWithVerbParams {
  directory?: string;
  fileName?: string;
  user: string;
  files: any[];
}

/**
 * 出参明细:
 * urlVerbs url数组
 */
export interface FlowBatchUploadFilesWithVerbResults {
  urlVerbs: any[];
}

/**
 * 文件批量上传（带缩略图）
 * @com.horsecoder.storage/FLOW_BATCH_UPLOAD_FILES_WITH_VERB
 */
export const flowBatchUploadFilesWithVerb = async (params: FlowBatchUploadFilesWithVerbParams): StandardPromise<FlowBatchUploadFilesWithVerbResults> => {
  return request('/app-storage/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.storage/FLOW_BATCH_UPLOAD_FILES_WITH_VERB',
      params: { ...params },
    },
  });
};


export const flowBatchUploadFilesWithVerbFacade = async (params: FlowBatchUploadFilesWithVerbParams): Promise<FlowBatchUploadFilesWithVerbResults> => {
  const { data: { value } } =  await flowBatchUploadFilesWithVerb(params);
  return value;
};