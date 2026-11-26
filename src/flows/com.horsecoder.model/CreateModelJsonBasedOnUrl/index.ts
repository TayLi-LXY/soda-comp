import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ModelJsonModel } from '@/flows/com.horsecoder.model/NewModelJson/types/ModelJsonModel';

/**
 * 入参明细:
 * type 类型
 * subType 子类型
 * modelId 模型ID
 * subModelId 子模型ID
 * title 标题
 * name 名称
 * jsonPath 模型文件url
 * lockedBy 锁持有对象
 * refs 模型引用ID列表
 * demandPath 需求文件url
 */
export interface FlowCreateModelJsonBasedOnUrlParams {
  type: string;
  subType: string;
  modelId: string;
  subModelId: string;
  title: string;
  name: string;
  jsonPath: string;
  lockedBy?: string;
  refs?: string[];
  demandPath?: string;
}

/**
 * 出参明细:
 * newModelJsonModel 新模型文件模型
 */
export interface FlowCreateModelJsonBasedOnUrlResults {
  newModelJsonModel: ModelJsonModel;
}

/**
 * 根据模型文件Url新建模型文件
 * @com.horsecoder.model/FLOW_CREATE_MODEL_JSON_BASED_ON_URL
 */
export const flowCreateModelJsonBasedOnUrl = async (params: FlowCreateModelJsonBasedOnUrlParams): StandardPromise<FlowCreateModelJsonBasedOnUrlResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_CREATE_MODEL_JSON_BASED_ON_URL',
      params: { ...params },
    },
  });
};


export const flowCreateModelJsonBasedOnUrlFacade = async (params: FlowCreateModelJsonBasedOnUrlParams): Promise<FlowCreateModelJsonBasedOnUrlResults> => {
  const { data: { value } } =  await flowCreateModelJsonBasedOnUrl(params);
  return value;
};