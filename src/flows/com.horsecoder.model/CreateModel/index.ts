import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * spaceId 空间id
 * title 应用标题
 * name 应用名
 * description 应用描述
 * cover 应用封面
 * userId 用户id
 */
export interface FlowCreateModelParams {
  spaceId: string;
  title: string;
  name: string;
  description: string;
  cover?: string;
  userId: string;
}

/**
 * 出参明细:
 * appId 应用id
 * projectId 项目ID
 */
export interface FlowCreateModelResults {
  appId: string;
  projectId: string;
}

/**
 * 创建模型
 * @com.horsecoder.model/FLOW_CREATE_MODEL
 */
export const flowCreateModel = async (params: FlowCreateModelParams): StandardPromise<FlowCreateModelResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_CREATE_MODEL',
      params: { ...params },
    },
  });
};


export const flowCreateModelFacade = async (params: FlowCreateModelParams): Promise<FlowCreateModelResults> => {
  const { data: { value } } =  await flowCreateModel(params);
  return value;
};