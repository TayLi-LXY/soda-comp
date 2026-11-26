import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * user 文件用户
 * directory 文件夹
 * fileName 文件名
 */
export interface FlowDownloadFileParams {
  user: string;
  directory?: string;
  fileName: string;
}

/**
 * 出参明细:
 */
export interface FlowDownloadFileResults {
}

/**
 * 文件下载流程
 * @com.horsecoder.storage/FLOW_DOWNLOAD_FILE
 */
export const flowDownloadFile = async (params: FlowDownloadFileParams): StandardPromise<FlowDownloadFileResults> => {
  return request('/app-storage/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.storage/FLOW_DOWNLOAD_FILE',
      params: { ...params },
    },
  });
};


export const flowDownloadFileFacade = async (params: FlowDownloadFileParams): Promise<FlowDownloadFileResults> => {
  const { data: { value } } =  await flowDownloadFile(params);
  return value;
};