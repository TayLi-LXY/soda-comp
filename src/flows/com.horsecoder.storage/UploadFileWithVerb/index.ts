import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * directory 文件夹
 * fileName 文件名
 * user 文件用户
 * file 文件
 */
export interface FlowUploadFileWithVerbParams {
  directory?: string;
  fileName?: string;
  user: string;
  file: any;
}

/**
 * 出参明细:
 * url 文件url
 * compressUrl 缩略图url
 */
export interface FlowUploadFileWithVerbResults {
  url: string;
  compressUrl: string;
}

/**
 * 文件上传流程（带缩略图）
 * @com.horsecoder.storage/FLOW_UPLOAD_FILE_WITH_VERB
 */
export const flowUploadFileWithVerb = async (params: FlowUploadFileWithVerbParams): StandardPromise<FlowUploadFileWithVerbResults> => {
  return request('/app-storage/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.storage/FLOW_UPLOAD_FILE_WITH_VERB',
      params: { ...params },
    },
  });
};


export const flowUploadFileWithVerbFacade = async (params: FlowUploadFileWithVerbParams): Promise<FlowUploadFileWithVerbResults> => {
  const { data: { value } } =  await flowUploadFileWithVerb(params);
  return value;
};