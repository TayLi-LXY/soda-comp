import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OpenTask } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/OpenTask/types/OpenTask';

/**
 * 入参明细:
 * openTask 开启任务
 * task 任务
 */
export interface FlowOpenTaskParams {
  openTask: OpenTask;
  task: string;
}

/**
 * 出参明细:
 * taskId 任务ID
 * taskStartTime 任务开始时间
 */
export interface FlowOpenTaskResults {
  taskId: string;
  taskStartTime: number;
}

/**
 * 开启任务
 * @cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_OPEN_TASK
 */
export const flowOpenTask = async (params: FlowOpenTaskParams): StandardPromise<FlowOpenTaskResults> => {
  return request('/intelligentAgentPlatform-taskScheduling/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_OPEN_TASK',
      params: { ...params },
    },
  });
};


export const flowOpenTaskFacade = async (params: FlowOpenTaskParams): Promise<FlowOpenTaskResults> => {
  const { data: { value } } =  await flowOpenTask(params);
  return value;
};