import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * file 文件
 * user 文件用户
 * directory 文件夹
 * fileName 文件名
 */
export interface FlowUploadStringFileParams {
  file: string;
  user: string;
  directory?: string;
  fileName?: string;
}

/**
 * 出参明细:
 * url 文件url
 */
export interface FlowUploadStringFileResults {
  url: string;
}

/**
 * 字符文件上传流程
 * @com.horsecoder.storage/FLOW_UPLOAD_STRING_FILE
 */
export const flowUploadStringFile = async (params: FlowUploadStringFileParams): StandardPromise<FlowUploadStringFileResults> => {
  return request('/app-storage/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.storage/FLOW_UPLOAD_STRING_FILE',
      params: { ...params },
    },
  });
};


export const flowUploadStringFileFacade = async (params: FlowUploadStringFileParams): Promise<FlowUploadStringFileResults> => {
  const { data: { value } } =  await flowUploadStringFile(params);
  return value;
};