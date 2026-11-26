import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * taskId 任务ID
 */
export interface FlowCancelTaskParams {
  taskId: string;
}

/**
 * 出参明细:
 */
export interface FlowCancelTaskResults {
}

/**
 * 取消任务
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CANCEL_TASK
 */
export const flowCancelTask = async (params: FlowCancelTaskParams): StandardPromise<FlowCancelTaskResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CANCEL_TASK',
      params: { ...params },
    },
  });
};


export const flowCancelTaskFacade = async (params: FlowCancelTaskParams): Promise<FlowCancelTaskResults> => {
  const { data: { value } } =  await flowCancelTask(params);
  return value;
};