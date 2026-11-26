import type { MessageManagementEntity } from '@/flows/com.horsecoder.im/SearchImChatRecordsBasedOnId/types/MessageManagementEntity';
import { refreshDialogueComponentLatestNewsRecordEntityState } from '@/src/models/Dialogue/action';

/**
 * 入参明细:
 * messageManagementEntity 消息管理实体
 * setter 页面设置器
 * dispatch WEB状态更新
 * conversationId 对话ID
 */
export interface FlowCodeSetChatConversationListControlParams {
  messageManagementEntity: MessageManagementEntity[];
  setter: any;
  dispatch: any;
  conversationId: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetChatConversationListControlResults {
}

/**
 * 设置聊天对话列表控制
 * FLOW_NODE_SET_CHAT_CONVERSATION_LIST_CONTROL
 * 唯一id: Dialogue/FLOW_CODE_SET_CHAT_CONVERSATION_LIST_CONTROL
 */
export const flowCodeSetChatConversationListControl = async (params: FlowCodeSetChatConversationListControlParams): Promise<FlowCodeSetChatConversationListControlResults> => {
  // 初始化流程出参
  // 开始流程
  const { messageManagementEntity } = params;
  const { setter } = params;
  const { dispatch } = params;
  const { conversationId } = params;

  // ========== 处理消息列表，添加 showTime 字段 ==========
  let processedMessages = [];
  if (messageManagementEntity && messageManagementEntity.length > 0) {
    // 时间间隔阈值（10分钟，单位：毫秒）
    const TIME_THRESHOLD = 10 * 60 * 1000;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yearStart = new Date(now.getFullYear(), 0, 1);

    const filteredMessages = messageManagementEntity.filter(m => m.channelType === 'simple');
    processedMessages = filteredMessages.map((message, index) => {
      let formattedShowTime = '';
      let formattedPeriodTime = '';
      // 第一条消息始终显示时间
      const timestamp = message.gmtUpdate || message.gmtCreate;
      if (timestamp) {
        const d = new Date(timestamp);
        // 今天的消息：显示 HH:mm
        if (d >= today) {
          formattedShowTime = d.toTimeString().slice(0, 5);
        }
        // 今年的消息：显示 MM-DD HH:mm
        else if (d >= yearStart) {
          formattedShowTime = (d.getMonth() + 1).toString().padStart(2, '0') + '-' +
                              d.getDate().toString().padStart(2, '0') + ' ' +
                              d.toTimeString().slice(0, 5);
        }
        // 更早的消息：显示 YYYY-MM-DD
        else {
          formattedShowTime = d.getFullYear() + '-' +
                              (d.getMonth() + 1).toString().padStart(2, '0') + '-' +
                              d.getDate().toString().padStart(2, '0');
        }
        if (index === 0) {
          formattedPeriodTime = formattedShowTime;
        } else {
          // 获取当前消息和上一条消息的时间
          const currentTime = new Date(message.gmtUpdate || message.gmtCreate).getTime();
          const previousTime = new Date(
            filteredMessages[index - 1].gmtUpdate || filteredMessages[index - 1].gmtCreate
          ).getTime();

          // 计算时间差
          const timeDiff = Math.abs(currentTime - previousTime);
          // 如果时间差大于等于 10 分钟，则显示时间
          if (timeDiff >= TIME_THRESHOLD) {
              formattedPeriodTime = formattedShowTime;
          }
        }
      }

      return {
        ...message,
        showTime: formattedShowTime,
        periodTime: formattedPeriodTime,
        ifStream: false,
      };
    });
  }
  dispatch(refreshDialogueComponentLatestNewsRecordEntityState(processedMessages));

  if (window.CHAT) {
    // 切换对话时，清空该对话的 WebSocket 缓存消息
    // 因为后端查询的历史消息已经是最新的
    const lastHistoryTime = processedMessages.length > 0
      ? (processedMessages[processedMessages.length - 1].gmtUpdate ||
         processedMessages[processedMessages.length - 1].gmtCreate)
      : null;

    // 只清空历史消息时间点之前的缓存（保留加载期间收到的新消息）
    window.CHAT.clearNewMessagesBefore(conversationId, lastHistoryTime);
    window.CHAT.clearStreamingMessages(conversationId);
    // 注册当前页面的 setter
    window.CHAT.currentSetter = setter;
    window.CHAT.currentConversationId = conversationId;
    window.CHAT.messageList = processedMessages;
    console.log('当前会话ID:', conversationId);
    console.log('历史消息数量:', processedMessages.length);
  } else {
    console.warn('⚠️ WebSocket 未初始化');
  }

  // 结束流程
  return {}
};
