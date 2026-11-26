import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * entity 聊天记录列表控制单项
 * index 索引
 * userCloneId 用户分身ID
 */
export interface FlowOnVisibleControlForSendingOrReplyingChatMessagesParams {
  setter: any;
  dispatch: any;
  entity: any;
  index: any;
  userCloneId: any;
}

/**
 * 出参明细:
 */
export interface FlowOnVisibleControlForSendingOrReplyingChatMessagesResults {
}

/**
 * 聊天消息发送或回复可见控制
 * @com.horsecoder.platform.mall.umi.chat/qASingleComponent/FLOW_ON_VISIBLE_CONTROL_FOR_SENDING_OR_REPLYING_CHAT_MESSAGES
 */
export const flowOnVisibleControlForSendingOrReplyingChatMessages = async (params: FlowOnVisibleControlForSendingOrReplyingChatMessagesParams): Promise<FlowOnVisibleControlForSendingOrReplyingChatMessagesResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/qASingleComponent/FLOW_ON_VISIBLE_CONTROL_FOR_SENDING_OR_REPLYING_CHAT_MESSAGES', { ...params });
};
