import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { MessageManagementEntity } from '@/flows/com.horsecoder.im/SearchImChatRecordsBasedOnId/types/MessageManagementEntity';

/**
 * 入参明细:
 * sessionId 会话ID
 */
export interface FlowQueryChatRecordsWithoutPaginationBasedOnIdParams {
  sessionId: string;
}

/**
 * 出参明细:
 * messageManagementEntity 消息管理实体
 */
export interface FlowQueryChatRecordsWithoutPaginationBasedOnIdResults {
  messageManagementEntity: MessageManagementEntity[];
}

/**
 * 根据ID不分页查询聊天记录
 * @com.horsecoder.im/FLOW_QUERY_CHAT_RECORDS_WITHOUT_PAGINATION_BASED_ON_ID
 */
export const flowQueryChatRecordsWithoutPaginationBasedOnId = async (params: FlowQueryChatRecordsWithoutPaginationBasedOnIdParams): StandardPromise<FlowQueryChatRecordsWithoutPaginationBasedOnIdResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_QUERY_CHAT_RECORDS_WITHOUT_PAGINATION_BASED_ON_ID',
      params: { ...params },
    },
  });
};


export const flowQueryChatRecordsWithoutPaginationBasedOnIdFacade = async (params: FlowQueryChatRecordsWithoutPaginationBasedOnIdParams): Promise<FlowQueryChatRecordsWithoutPaginationBasedOnIdResults> => {
  const { data: { value } } =  await flowQueryChatRecordsWithoutPaginationBasedOnId(params);
  return value;
};