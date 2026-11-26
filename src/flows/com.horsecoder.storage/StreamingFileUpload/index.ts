import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * directory 文件夹
 * fileName 文件名
 * file 文件
 * user 文件用户
 */
export interface FlowStreamingFileUploadParams {
  directory?: string;
  fileName?: string;
  file: any;
  user: string;
}

/**
 * 出参明细:
 * url 文件url
 * streamingM3u8FileUrl 流媒体m3u8文件url
 */
export interface FlowStreamingFileUploadResults {
  url: string;
  streamingM3u8FileUrl: string;
}

/**
 * 流媒体文件上传m3u8
 * @com.horsecoder.storage/FLOW_STREAMING_FILE_UPLOAD
 */
export const flowStreamingFileUpload = async (params: FlowStreamingFileUploadParams): StandardPromise<FlowStreamingFileUploadResults> => {
  return request('/app-storage/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.storage/FLOW_STREAMING_FILE_UPLOAD',
      params: { ...params },
    },
  });
};


export const flowStreamingFileUploadFacade = async (params: FlowStreamingFileUploadParams): Promise<FlowStreamingFileUploadResults> => {
  const { data: { value } } =  await flowStreamingFileUpload(params);
  return value;
};