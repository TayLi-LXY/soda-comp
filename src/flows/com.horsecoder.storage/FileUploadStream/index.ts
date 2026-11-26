import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * fileName 文件名
 * directory 文件夹
 * user 文件用户
 * file 文件
 */
export interface FlowFileUploadStreamParams {
  fileName?: string;
  directory?: string;
  user: string;
  file: any;
}

/**
 * 出参明细:
 * url 文件url
 */
export interface FlowFileUploadStreamResults {
  url: string;
}

/**
 * 文件上传流程Stream
 * @com.horsecoder.storage/FLOW_FILE_UPLOAD_STREAM
 */
export const flowFileUploadStream = async (params: FlowFileUploadStreamParams): StandardPromise<FlowFileUploadStreamResults> => {
  return request('/app-storage/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.storage/FLOW_FILE_UPLOAD_STREAM',
      params: { ...params },
    },
  });
};


export const flowFileUploadStreamFacade = async (params: FlowFileUploadStreamParams): Promise<FlowFileUploadStreamResults> => {
  const { data: { value } } =  await flowFileUploadStream(params);
  return value;
};