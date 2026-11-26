import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { IntegralChangeEntity } from '@/flows/com.horsecoder.market/QueryListOfUserPointsChangeLogs/types/IntegralChangeEntity';

/**
 * 入参明细:
 * userId 用户ID
 * integralId 积分ID
 */
export interface FlowQueryListOfUserPointsChangeLogsParams {
  userId?: string;
  integralId?: string;
}

/**
 * 出参明细:
 * listOfEntityChangesInPoints 积分变化实体列表
 */
export interface FlowQueryListOfUserPointsChangeLogsResults {
  listOfEntityChangesInPoints?: IntegralChangeEntity[];
}

/**
 * 查询用户积分变化日志列表
 * @com.horsecoder.market/FLOW_QUERY_LIST_OF_USER_POINTS_CHANGE_LOGS
 */
export const flowQueryListOfUserPointsChangeLogs = async (params: FlowQueryListOfUserPointsChangeLogsParams): StandardPromise<FlowQueryListOfUserPointsChangeLogsResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_QUERY_LIST_OF_USER_POINTS_CHANGE_LOGS',
      params: { ...params },
    },
  });
};


export const flowQueryListOfUserPointsChangeLogsFacade = async (params: FlowQueryListOfUserPointsChangeLogsParams): Promise<FlowQueryListOfUserPointsChangeLogsResults> => {
  const { data: { value } } =  await flowQueryListOfUserPointsChangeLogs(params);
  return value;
};