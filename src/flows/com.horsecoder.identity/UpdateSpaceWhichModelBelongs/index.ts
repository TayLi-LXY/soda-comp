import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * spaceId 空间ID
 * modelId 模型ID
 */
export interface FlowUpdateSpaceWhichModelBelongsParams {
  spaceId: string;
  modelId: string;
}

/**
 * 出参明细:
 */
export interface FlowUpdateSpaceWhichModelBelongsResults {
}

/**
 * 更新模型所属空间
 * @com.horsecoder.identity/FLOW_UPDATE_SPACE_WHICH_MODEL_BELONGS
 */
export const flowUpdateSpaceWhichModelBelongs = async (params: FlowUpdateSpaceWhichModelBelongsParams): StandardPromise<FlowUpdateSpaceWhichModelBelongsResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_UPDATE_SPACE_WHICH_MODEL_BELONGS',
      params: { ...params },
    },
  });
};


export const flowUpdateSpaceWhichModelBelongsFacade = async (params: FlowUpdateSpaceWhichModelBelongsParams): Promise<FlowUpdateSpaceWhichModelBelongsResults> => {
  const { data: { value } } =  await flowUpdateSpaceWhichModelBelongs(params);
  return value;
};