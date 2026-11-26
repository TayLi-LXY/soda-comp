import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { QueryFilter } from '@/flows/com.horsecoder.im/SearchImChatRecordsBasedOnId/types/QueryFilter';
import type { MessageManagementEntity } from '@/flows/com.horsecoder.im/SearchImChatRecordsBasedOnId/types/MessageManagementEntity';

/**
 * 入参明细:
 * queryFilter 查询Filter
 */
export interface FlowSearchImChatRecordsBasedOnIdParams {
  queryFilter: QueryFilter;
}

/**
 * 出参明细:
 * messageManagementEntity 消息管理实体
 */
export interface FlowSearchImChatRecordsBasedOnIdResults {
  messageManagementEntity: MessageManagementEntity[];
}

/**
 * 根据ID查询聊天记录
 * @com.horsecoder.im/FLOW_SEARCH_IM_CHAT_RECORDS_BASED_ON_ID
 */
export const flowSearchImChatRecordsBasedOnId = async (params: FlowSearchImChatRecordsBasedOnIdParams): StandardPromise<FlowSearchImChatRecordsBasedOnIdResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_SEARCH_IM_CHAT_RECORDS_BASED_ON_ID',
      params: { ...params },
    },
  });
};


export const flowSearchImChatRecordsBasedOnIdFacade = async (params: FlowSearchImChatRecordsBasedOnIdParams): Promise<FlowSearchImChatRecordsBasedOnIdResults> => {
  const { data: { value } } =  await flowSearchImChatRecordsBasedOnId(params);
  return value;
};