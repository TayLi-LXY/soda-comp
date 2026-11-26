import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * integralId 积分ID
 */
export interface FlowDeletePointsParams {
  integralId?: string;
}

/**
 * 出参明细:
 */
export interface FlowDeletePointsResults {
}

/**
 * 删除积分
 * @com.horsecoder.market/FLOW_DELETE_POINTS
 */
export const flowDeletePoints = async (params: FlowDeletePointsParams): StandardPromise<FlowDeletePointsResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_DELETE_POINTS',
      params: { ...params },
    },
  });
};


export const flowDeletePointsFacade = async (params: FlowDeletePointsParams): Promise<FlowDeletePointsResults> => {
  const { data: { value } } =  await flowDeletePoints(params);
  return value;
};