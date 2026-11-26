import type { QueryFilter } from '@/flows/com.horsecoder.im/SearchImChatRecordsBasedOnId/types/QueryFilter';

/**
 * 入参明细:
 * conversationId 对话ID
 * loggedinUser 登录用户
 */
export interface FlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationIdParams {
  conversationId: any;
  loggedinUser: any;
}

/**
 * 出参明细:
 * queryFilter 查询Filter
 */
export interface FlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationIdResults {
  queryFilter: QueryFilter;
}

/**
 * 根据对话ID获取历史聊天记录
 * FLOW_NODE_ON_RETRIEVE_HISTORICAL_CHAT_RECORDS_BASED_ON_CONVERSATION_ID
 * 唯一id: Dialogue/FLOW_CODE_ON_RETRIEVE_HISTORICAL_CHAT_RECORDS_BASED_ON_CONVERSATION_ID
 */
export const flowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId = async (params: FlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationIdParams): Promise<FlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationIdResults> => {
  // 初始化流程出参
  let queryFilter;
  // 开始流程
  const { conversationId } = params;
  const { loggedinUser } = params;

  queryFilter = {
    sessionId: conversationId,
    imUserId: loggedinUser.id,
    rows: 500,
    page: 1
  };

  // 结束流程
  return {
    queryFilter,
  }
};
