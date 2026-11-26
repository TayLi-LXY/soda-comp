import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * dialogueTaskId 对话任务ID
 * output 输出
 * state 状态
 */
export interface FlowUpdateTaskStatusAndOutputParams {
  dialogueTaskId: string;
  output: string;
  state: number;
}

/**
 * 出参明细:
 */
export interface FlowUpdateTaskStatusAndOutputResults {
}

/**
 * 更新任务状态和输出
 * @com.horsecoder.platform.mall.dialogue/FLOW_UPDATE_TASK_STATUS_AND_OUTPUT
 */
export const flowUpdateTaskStatusAndOutput = async (params: FlowUpdateTaskStatusAndOutputParams): StandardPromise<FlowUpdateTaskStatusAndOutputResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_UPDATE_TASK_STATUS_AND_OUTPUT',
      params: { ...params },
    },
  });
};


export const flowUpdateTaskStatusAndOutputFacade = async (params: FlowUpdateTaskStatusAndOutputParams): Promise<FlowUpdateTaskStatusAndOutputResults> => {
  const { data: { value } } =  await flowUpdateTaskStatusAndOutput(params);
  return value;
};