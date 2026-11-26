import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * fileUrl 文件url
 */
export interface FlowGetUrlFileTypeParams {
  fileUrl: string;
}

/**
 * 出参明细:
 * fileType 文件类型
 */
export interface FlowGetUrlFileTypeResults {
  fileType: string;
}

/**
 * 获取url文件类型
 * @com.horsecoder.storage/FLOW_GET_URL_FILE_TYPE
 */
export const flowGetUrlFileType = async (params: FlowGetUrlFileTypeParams): StandardPromise<FlowGetUrlFileTypeResults> => {
  return request('/app-storage/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.storage/FLOW_GET_URL_FILE_TYPE',
      params: { ...params },
    },
  });
};


export const flowGetUrlFileTypeFacade = async (params: FlowGetUrlFileTypeParams): Promise<FlowGetUrlFileTypeResults> => {
  const { data: { value } } =  await flowGetUrlFileType(params);
  return value;
};