import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DataFile } from '@/flows/com.horsecoder.platform.mall.dialogue/IntelligentDataQuery/types/DataFile';

/**
 * 入参明细:
 * task 任务
 * fileList 文件列表
 * senderId 发送者ID
 * userConversationId 用户对话ID
 * conversationId 会话ID
 */
export interface FlowIntelligentDataQueryParams {
  task: string;
  fileList?: DataFile[];
  senderId: string;
  userConversationId?: string;
  conversationId: string;
}

/**
 * 出参明细:
 */
export interface FlowIntelligentDataQueryResults {
}

/**
 * 智能数据查询
 * @com.horsecoder.platform.mall.dialogue/FLOW_INTELLIGENT_DATA_QUERY
 */
export const flowIntelligentDataQuery = async (params: FlowIntelligentDataQueryParams): StandardPromise<FlowIntelligentDataQueryResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_INTELLIGENT_DATA_QUERY',
      params: { ...params },
    },
  });
};


export const flowIntelligentDataQueryFacade = async (params: FlowIntelligentDataQueryParams): Promise<FlowIntelligentDataQueryResults> => {
  const { data: { value } } =  await flowIntelligentDataQuery(params);
  return value;
};