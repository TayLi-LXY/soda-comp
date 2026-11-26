import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * conversationId 对话ID
 * isConversationComplete isConversationComplete
 */
export interface FlowOnDetermineWhetherConversationCompletedBasedOnConversationIdParams {
  setter: any;
  dispatch: any;
  conversationId: any;
  isConversationComplete: any;
}

/**
 * 出参明细:
 */
export interface FlowOnDetermineWhetherConversationCompletedBasedOnConversationIdResults {
}

/**
 * 根据对话id判断对话是否完成
 * @com.horsecoder.platform.mall.umi.chat/rightComponent/FLOW_ON_DETERMINE_WHETHER_CONVERSATION_COMPLETED_BASED_ON_CONVERSATION_ID
 */
export const flowOnDetermineWhetherConversationCompletedBasedOnConversationId = async (params: FlowOnDetermineWhetherConversationCompletedBasedOnConversationIdParams): Promise<FlowOnDetermineWhetherConversationCompletedBasedOnConversationIdResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/rightComponent/FLOW_ON_DETERMINE_WHETHER_CONVERSATION_COMPLETED_BASED_ON_CONVERSATION_ID', { ...params });
};
