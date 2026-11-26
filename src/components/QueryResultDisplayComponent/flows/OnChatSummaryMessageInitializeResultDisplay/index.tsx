import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * ifStream 是否流式
 * messageId 消息ID
 * messageContent 消息内容
 */
export interface FlowOnChatSummaryMessageInitializeResultDisplayParams {
  setter: any;
  dispatch: any;
  ifStream: any;
  messageId: any;
  messageContent: any;
}

/**
 * 出参明细:
 */
export interface FlowOnChatSummaryMessageInitializeResultDisplayResults {
}

/**
 * 根据聊天总结消息初始化结果展示
 * @com.horsecoder.platform.mall.umi.chat/queryResultDisplayComponent/FLOW_ON_CHAT_SUMMARY_MESSAGE_INITIALIZE_RESULT_DISPLAY
 */
export const flowOnChatSummaryMessageInitializeResultDisplay = async (params: FlowOnChatSummaryMessageInitializeResultDisplayParams): Promise<FlowOnChatSummaryMessageInitializeResultDisplayResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/queryResultDisplayComponent/FLOW_ON_CHAT_SUMMARY_MESSAGE_INITIALIZE_RESULT_DISPLAY', { ...params });
};
