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
 * file 模型文件
 * lockedBy 锁持有对象
 * refs 模型引用ID列表
 * demandPath 需求文件url
 */
export interface FlowNewModelJsonParams {
  type: string;
  subType: string;
  modelId: string;
  subModelId: string;
  title: string;
  name: string;
  file: any;
  lockedBy?: string;
  refs?: string[];
  demandPath?: string;
}

/**
 * 出参明细:
 * newModelJson 新模型文件
 */
export interface FlowNewModelJsonResults {
  newModelJson: ModelJsonModel;
}

/**
 * 新建模型文件
 * @com.horsecoder.model/FLOW_NEW_MODEL_JSON
 */
export const flowNewModelJson = async (params: FlowNewModelJsonParams): StandardPromise<FlowNewModelJsonResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_NEW_MODEL_JSON',
      params: { ...params },
    },
  });
};


export const flowNewModelJsonFacade = async (params: FlowNewModelJsonParams): Promise<FlowNewModelJsonResults> => {
  const { data: { value } } =  await flowNewModelJson(params);
  return value;
};