import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DataFile } from '@/flows/com.horsecoder.platform.mall.dialogue/IntelligentDataQuery/types/DataFile';

/**
 * 入参明细:
 * task 任务
 * senderId 发送者ID
 * receiverIdList 接收者ID列表
 * conversationId 会话ID
 * userConversationId 用户对话ID
 * sessionId 业务sessionId
 * dialogueTaskId 对话任务ID
 * state 状态
 * fileList 文件列表
 */
export interface FlowExecuteIntelligentDataTasksParams {
  task: string;
  senderId: string;
  receiverIdList: string[];
  conversationId: string;
  userConversationId?: string;
  sessionId?: string;
  dialogueTaskId: string;
  state: number;
  fileList?: DataFile[];
}

/**
 * 出参明细:
 */
export interface FlowExecuteIntelligentDataTasksResults {
}

/**
 * 执行智能数据任务
 * @com.horsecoder.platform.mall.dialogue/FLOW_EXECUTE_INTELLIGENT_DATA_TASKS
 */
export const flowExecuteIntelligentDataTasks = async (params: FlowExecuteIntelligentDataTasksParams): StandardPromise<FlowExecuteIntelligentDataTasksResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_EXECUTE_INTELLIGENT_DATA_TASKS',
      params: { ...params },
    },
  });
};


export const flowExecuteIntelligentDataTasksFacade = async (params: FlowExecuteIntelligentDataTasksParams): Promise<FlowExecuteIntelligentDataTasksResults> => {
  const { data: { value } } =  await flowExecuteIntelligentDataTasks(params);
  return value;
};