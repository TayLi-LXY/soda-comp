import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AddIntegralEntity } from '@/flows/com.horsecoder.market/AddAndModifyPoints/types/AddIntegralEntity';

/**
 * 入参明细:
 * addIntegralEntity 新增积分实体
 */
export interface FlowAddAndModifyPointsParams {
  addIntegralEntity?: AddIntegralEntity;
}

/**
 * 出参明细:
 * result 结果
 */
export interface FlowAddAndModifyPointsResults {
  result?: string;
}

/**
 * 新增修改积分
 * @com.horsecoder.market/FLOW_ADD_AND_MODIFY_POINTS
 */
export const flowAddAndModifyPoints = async (params: FlowAddAndModifyPointsParams): StandardPromise<FlowAddAndModifyPointsResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_ADD_AND_MODIFY_POINTS',
      params: { ...params },
    },
  });
};


export const flowAddAndModifyPointsFacade = async (params: FlowAddAndModifyPointsParams): Promise<FlowAddAndModifyPointsResults> => {
  const { data: { value } } =  await flowAddAndModifyPoints(params);
  return value;
};