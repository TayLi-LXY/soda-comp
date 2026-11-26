import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * taskId 任务Id
 */
export interface FlowQueryExecutionStatusBasedOnTaskIdParams {
  taskId: string;
}

/**
 * 出参明细:
 * state 状态
 */
export interface FlowQueryExecutionStatusBasedOnTaskIdResults {
  state: number;
}

/**
 * 根据任务id查询执行状态
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_EXECUTION_STATUS_BASED_ON_TASK_ID
 */
export const flowQueryExecutionStatusBasedOnTaskId = async (params: FlowQueryExecutionStatusBasedOnTaskIdParams): StandardPromise<FlowQueryExecutionStatusBasedOnTaskIdResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_EXECUTION_STATUS_BASED_ON_TASK_ID',
      params: { ...params },
    },
  });
};


export const flowQueryExecutionStatusBasedOnTaskIdFacade = async (params: FlowQueryExecutionStatusBasedOnTaskIdParams): Promise<FlowQueryExecutionStatusBasedOnTaskIdResults> => {
  const { data: { value } } =  await flowQueryExecutionStatusBasedOnTaskId(params);
  return value;
};