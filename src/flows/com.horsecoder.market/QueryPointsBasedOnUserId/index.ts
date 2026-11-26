import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AddIntegralEntity } from '@/flows/com.horsecoder.market/AddAndModifyPoints/types/AddIntegralEntity';

/**
 * 入参明细:
 * userId 用户ID
 */
export interface FlowQueryPointsBasedOnUserIdParams {
  userId: string;
}

/**
 * 出参明细:
 * integralDetailsEntity 积分详情实体
 */
export interface FlowQueryPointsBasedOnUserIdResults {
  integralDetailsEntity?: AddIntegralEntity;
}

/**
 * 根据用户ID查询积分
 * @com.horsecoder.market/FLOW_QUERY_POINTS_BASED_ON_USER_ID
 */
export const flowQueryPointsBasedOnUserId = async (params: FlowQueryPointsBasedOnUserIdParams): StandardPromise<FlowQueryPointsBasedOnUserIdResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_QUERY_POINTS_BASED_ON_USER_ID',
      params: { ...params },
    },
  });
};


export const flowQueryPointsBasedOnUserIdFacade = async (params: FlowQueryPointsBasedOnUserIdParams): Promise<FlowQueryPointsBasedOnUserIdResults> => {
  const { data: { value } } =  await flowQueryPointsBasedOnUserId(params);
  return value;
};