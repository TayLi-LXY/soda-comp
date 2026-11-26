import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * filePath 文件地址
 * user 用户
 * folder 文件夹
 * fileName 文件名
 */
export interface FlowGetFileTypeParams {
  filePath: string;
  user: string;
  folder?: string;
  fileName: string;
}

/**
 * 出参明细:
 * fileType 文件类型
 */
export interface FlowGetFileTypeResults {
  fileType: string;
}

/**
 * 获取文件类型
 * @com.horsecoder.storage/FLOW_GET_FILE_TYPE
 */
export const flowGetFileType = async (params: FlowGetFileTypeParams): StandardPromise<FlowGetFileTypeResults> => {
  return request('/app-storage/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.storage/FLOW_GET_FILE_TYPE',
      params: { ...params },
    },
  });
};


export const flowGetFileTypeFacade = async (params: FlowGetFileTypeParams): Promise<FlowGetFileTypeResults> => {
  const { data: { value } } =  await flowGetFileType(params);
  return value;
};