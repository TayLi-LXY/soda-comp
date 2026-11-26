import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AddPointsChangeLogEntity } from '@/flows/com.horsecoder.market/AddPointsChangeLog/types/AddPointsChangeLogEntity';

/**
 * 入参明细:
 * addPointsChangeLogEntity 新增积分变化日志实体
 */
export interface FlowAddPointsChangeLogParams {
  addPointsChangeLogEntity?: AddPointsChangeLogEntity;
}

/**
 * 出参明细:
 * integralId 积分ID
 * integralChange 积分变化
 */
export interface FlowAddPointsChangeLogResults {
  integralId?: string;
  integralChange?: string;
}

/**
 * 新增积分变化日志
 * @com.horsecoder.market/FLOW_ADD_POINTS_CHANGE_LOG
 */
export const flowAddPointsChangeLog = async (params: FlowAddPointsChangeLogParams): StandardPromise<FlowAddPointsChangeLogResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_ADD_POINTS_CHANGE_LOG',
      params: { ...params },
    },
  });
};


export const flowAddPointsChangeLogFacade = async (params: FlowAddPointsChangeLogParams): Promise<FlowAddPointsChangeLogResults> => {
  const { data: { value } } =  await flowAddPointsChangeLog(params);
  return value;
};