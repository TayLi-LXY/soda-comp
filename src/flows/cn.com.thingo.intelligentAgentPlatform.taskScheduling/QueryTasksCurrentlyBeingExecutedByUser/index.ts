import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userId 用户ID
 */
export interface FlowQueryTasksCurrentlyBeingExecutedByUserParams {
  userId: string;
}

/**
 * 出参明细:
 * numberOfRunningTask 正在执行的任务数量
 */
export interface FlowQueryTasksCurrentlyBeingExecutedByUserResults {
  numberOfRunningTask: number;
}

/**
 * 查询当前用户正在执行的任务
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_TASKS_CURRENTLY_BEING_EXECUTED_BY_USER
 */
export const flowQueryTasksCurrentlyBeingExecutedByUser = async (params: FlowQueryTasksCurrentlyBeingExecutedByUserParams): StandardPromise<FlowQueryTasksCurrentlyBeingExecutedByUserResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_TASKS_CURRENTLY_BEING_EXECUTED_BY_USER',
      params: { ...params },
    },
  });
};


export const flowQueryTasksCurrentlyBeingExecutedByUserFacade = async (params: FlowQueryTasksCurrentlyBeingExecutedByUserParams): Promise<FlowQueryTasksCurrentlyBeingExecutedByUserResults> => {
  const { data: { value } } =  await flowQueryTasksCurrentlyBeingExecutedByUser(params);
  return value;
};