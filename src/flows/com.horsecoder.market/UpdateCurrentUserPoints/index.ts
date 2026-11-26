import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userId 用户ID
 */
export interface FlowUpdateCurrentUserPointsParams {
  userId?: string;
}

/**
 * 出参明细:
 */
export interface FlowUpdateCurrentUserPointsResults {
}

/**
 * 更新当前用户积分
 * @com.horsecoder.market/FLOW_UPDATE_CURRENT_USER_POINTS
 */
export const flowUpdateCurrentUserPoints = async (params: FlowUpdateCurrentUserPointsParams): StandardPromise<FlowUpdateCurrentUserPointsResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_UPDATE_CURRENT_USER_POINTS',
      params: { ...params },
    },
  });
};


export const flowUpdateCurrentUserPointsFacade = async (params: FlowUpdateCurrentUserPointsParams): Promise<FlowUpdateCurrentUserPointsResults> => {
  const { data: { value } } =  await flowUpdateCurrentUserPoints(params);
  return value;
};