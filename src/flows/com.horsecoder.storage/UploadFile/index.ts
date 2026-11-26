import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * directory 文件夹
 * fileName 文件名
 * user 文件用户
 * file 文件
 */
export interface FlowUploadFileParams {
  directory?: string;
  fileName?: string;
  user: string;
  file: any;
}

/**
 * 出参明细:
 * url 文件url
 */
export interface FlowUploadFileResults {
  url: string;
}

/**
 * 文件上传流程
 * @com.horsecoder.storage/FLOW_UPLOAD_FILE
 */
export const flowUploadFile = async (params: FlowUploadFileParams): StandardPromise<FlowUploadFileResults> => {
  return request('/app-storage/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.storage/FLOW_UPLOAD_FILE',
      params: { ...params },
    },
  });
};


export const flowUploadFileFacade = async (params: FlowUploadFileParams): Promise<FlowUploadFileResults> => {
  const { data: { value } } =  await flowUploadFile(params);
  return value;
};