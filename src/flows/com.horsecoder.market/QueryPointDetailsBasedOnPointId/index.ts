import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AddIntegralEntity } from '@/flows/com.horsecoder.market/AddAndModifyPoints/types/AddIntegralEntity';

/**
 * 入参明细:
 * integralId 积分ID
 */
export interface FlowQueryPointDetailsBasedOnPointIdParams {
  integralId?: string;
}

/**
 * 出参明细:
 * pointsDetails 积分详情
 */
export interface FlowQueryPointDetailsBasedOnPointIdResults {
  pointsDetails?: AddIntegralEntity;
}

/**
 * 根据积分ID查询积分详情
 * @com.horsecoder.market/FLOW_QUERY_POINT_DETAILS_BASED_ON_POINT_ID
 */
export const flowQueryPointDetailsBasedOnPointId = async (params: FlowQueryPointDetailsBasedOnPointIdParams): StandardPromise<FlowQueryPointDetailsBasedOnPointIdResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_QUERY_POINT_DETAILS_BASED_ON_POINT_ID',
      params: { ...params },
    },
  });
};


export const flowQueryPointDetailsBasedOnPointIdFacade = async (params: FlowQueryPointDetailsBasedOnPointIdParams): Promise<FlowQueryPointDetailsBasedOnPointIdResults> => {
  const { data: { value } } =  await flowQueryPointDetailsBasedOnPointId(params);
  return value;
};