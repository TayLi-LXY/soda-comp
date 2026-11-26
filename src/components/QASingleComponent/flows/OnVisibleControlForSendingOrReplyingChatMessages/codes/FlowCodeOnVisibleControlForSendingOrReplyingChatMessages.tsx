import Cookies from "js-cookie";

/**
 * 入参明细:
 * dispatch WEB状态更新
 * setter 页面设置器
 * entity 聊天记录列表控制单项
 * index 索引
 * userCloneId 用户分身ID
 */
export interface FlowCodeOnVisibleControlForSendingOrReplyingChatMessagesParams {
  dispatch: any;
  setter: any;
  entity: any;
  index: any;
  userCloneId: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnVisibleControlForSendingOrReplyingChatMessagesResults {
}

/**
 * 聊天消息发送或回复可见控制
 * FLOW_NODE_ON_VISIBLE_CONTROL_FOR_SENDING_OR_REPLYING_CHAT_MESSAGES
 * 唯一id: QASingleComponent/FLOW_CODE_ON_VISIBLE_CONTROL_FOR_SENDING_OR_REPLYING_CHAT_MESSAGES
 */
export const flowCodeOnVisibleControlForSendingOrReplyingChatMessages = async (params: FlowCodeOnVisibleControlForSendingOrReplyingChatMessagesParams): Promise<FlowCodeOnVisibleControlForSendingOrReplyingChatMessagesResults> => {
  // 初始化流程出参
  // 开始流程
  const { dispatch } = params;
  const { setter } = params;
  const { entity } = params;
  const { index } = params;
  const { userCloneId } = params;

  const userId = Cookies.get('userId');
  if (!entity) {
    // 如果 entity 为空，默认隐藏两者
    setter.setVisibleControlOfSendingInformation(false);
    setter.setChatReplyVisibleControl(false);
    return {};
  }
//   if (senderNicknameDictionary && entity.senderId) {
//     const senderName = senderNicknameDictionary[entity.senderId];
//     if (senderName) {
//       entity.senderName = senderName;
//     }
//   }

  // 群聊逻辑:判断是否为发送方(包括用户本人和用户的分身)
  const isMySendMessage = userId === entity.senderId || userCloneId === entity.senderId;

  if (isMySendMessage) {
    // 我发送的消息 - 显示发送样式（右边）
    setter.setVisibleControlOfSendingInformation(true);
    setter.setChatReplyVisibleControl(false);
  } else {
    // 别人发送的消息 - 显示接收样式（左边）
    setter.setVisibleControlOfSendingInformation(false);
    setter.setChatReplyVisibleControl(true);
  }

  // 结束流程
  return {}
};
