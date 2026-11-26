import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * conversationId 对话ID
 * senderNicknameDictionary 发送人昵称字典
 */
export interface FlowOnRetrieveHistoricalChatRecordsBasedOnConversationIdParams {
  setter: any;
  dispatch: any;
  conversationId: any;
  senderNicknameDictionary: any;
}

/**
 * 出参明细:
 */
export interface FlowOnRetrieveHistoricalChatRecordsBasedOnConversationIdResults {
}

/**
 * 根据对话ID获取历史聊天记录
 * @com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_RETRIEVE_HISTORICAL_CHAT_RECORDS_BASED_ON_CONVERSATION_ID
 */
export const flowOnRetrieveHistoricalChatRecordsBasedOnConversationId = async (params: FlowOnRetrieveHistoricalChatRecordsBasedOnConversationIdParams): Promise<FlowOnRetrieveHistoricalChatRecordsBasedOnConversationIdResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_RETRIEVE_HISTORICAL_CHAT_RECORDS_BASED_ON_CONVERSATION_ID', { ...params });
};
