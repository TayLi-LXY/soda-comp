import { refreshEmptyLayoutLayoutLoggedinUserState } from '@/models/EmptyLayout/action';
import { refreshDialogueComponentLatestNewsRecordEntityState } from '@/models/Dialogue/action';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import { message } from 'antd';
import type { DialogueTaskModel } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueTaskModel';
import type { DialogueTaskFileModel } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueTaskFileModel';

/**
 * 入参明细:
 * user 用户
 * dispatch WEB状态更新
 */
export interface FlowCodeInitializeWebsocketConnectionParams {
  user: User;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeInitializeWebsocketConnectionResults {
}


// 特殊标记列表 - 这些不应该显示在消息内容中
const SPECIAL_MARKERS = ['[DONE]', '[QUEUE]', '[SILENCE]','[END]', '[ERROR]'];
// 消息片段类型
interface MessageFragment {
  timestamp: number;
  text: string;
}

// 流式消息类型
interface StreamingMessage {
  messageId: string;
  conversationId: string;
  senderId: string;
  fragments: MessageFragment[];
  startTime: number;
  // 新增：用于处理 [DONE] 可能先到的情况
  realCreateTime: number;   // 新增：真实的创建时间（毫秒）
  isDone: boolean;
  doneTimestamp: number | null;
  remainingCount: number; // 收到 [DONE] 后，最多再等待的消息数量
  doneTimerId: number | null; // 收到 [DONE] 后的延迟完成定时器
  dialogueTask: DialogueTaskModel | null;
  dialogueTaskFileList: DialogueTaskFileModel[];
  recommendedQuestionList: string[];
}

type DialogueTaskPayload = Pick<StreamingMessage, 'dialogueTask' | 'dialogueTaskFileList' | 'recommendedQuestionList'>;

const TIME_THRESHOLD = 10 * 60 * 1000;
const DONE_COMPLETE_DELAY = 1000;

/**
 * 格式化消息时间（只处理今天的消息）
 * @param isoString ISO 格式的时间字符串
 * @returns 格式化后的时间字符串，格式：HH:mm
 */
function formatMessageTime(isoString: string): string {
  const date = new Date(isoString);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

function cleanSpecialMarkers(content: string): string {
  let cleaned = content;
  for (const marker of SPECIAL_MARKERS) {
    cleaned = cleaned.split(marker).join('');
  }
  return cleaned.trim();
}

function getDialogueTaskPayload(messageData: any): DialogueTaskPayload {
  return {
    dialogueTask: messageData.dialogueTask ?? null,
    dialogueTaskFileList: Array.isArray(messageData.dialogueTaskFileList) ? messageData.dialogueTaskFileList : [],
    recommendedQuestionList: Array.isArray(messageData.recommendedQuestionList) ? messageData.recommendedQuestionList : [],
  };
}

function applyDialogueTaskPayload(streamingMsg: StreamingMessage, messageData: any) {
  if (Object.prototype.hasOwnProperty.call(messageData, 'dialogueTask')) {
    streamingMsg.dialogueTask = messageData.dialogueTask ?? null;
  }
  if (Object.prototype.hasOwnProperty.call(messageData, 'dialogueTaskFileList')) {
    streamingMsg.dialogueTaskFileList = Array.isArray(messageData.dialogueTaskFileList) ? messageData.dialogueTaskFileList : [];
  }
  if (Object.prototype.hasOwnProperty.call(messageData, 'recommendedQuestionList')) {
    streamingMsg.recommendedQuestionList = Array.isArray(messageData.recommendedQuestionList) ? messageData.recommendedQuestionList : [];
  }
}

/**
 * 初始化websocket连接
 * FLOW_NODE_INITIALIZE_WEBSOCKET_CONNECTION
 * 唯一id: EmptyLayout/FLOW_CODE_INITIALIZE_WEBSOCKET_CONNECTION
 */
export const flowCodeInitializeWebsocketConnection = async (params: FlowCodeInitializeWebsocketConnectionParams): Promise<FlowCodeInitializeWebsocketConnectionResults> => {
  // 初始化流程出参
  // 开始流程
  const { user } = params;
  const { dispatch } = params;

  dispatch(refreshEmptyLayoutLayoutLoggedinUserState(user));
  const userId = user.id;
  //const userId = Cookies.get('userId');
  //const userId = '0AA36C313CA241E9802B1A219BAD0735'; // 记得修改
  if (!userId || userId === '') {
    throw new Error('未获取到Cookies中用户ID');
  }
  // const websocketUrl = process.env.NODE_ENV === 'development'
  //   ? 'ws://localhost:21313/horsecoder/im'  // ← 端口改为 21313，路径改为 /horsecoder/im
  //   : 'wss://agent.horsecoder.com/im-ws/horsecoder/im';
  const websocketUrl = 'wss://ai.horsecoder.com/horsecoder/im';
  if (window.CHAT?.socket?.readyState === WebSocket.OPEN) {
    console.log('WebSocket 已连接，无需重复创建');
    return {};
  }

  window.CHAT = {
    socket: null,
    streamingMessages: new Map(),
    // 已完成的新消息（按对话ID分组）：key 为 conversationId
    newMessages: new Map(),
    messageList: [],
    currentConversationId: null,
    currentSetter: null,
    rafId: null,
    needsUpdate: false,

    // ========== 完成消息方法 ==========
    completeMessage: function(messageId: string) {
      const streamingMsg = CHAT.streamingMessages.get(messageId);
      if (!streamingMsg) return;

      if (streamingMsg.doneTimerId) {
        window.clearTimeout(streamingMsg.doneTimerId);
        streamingMsg.doneTimerId = null;
      }

      const { conversationId } = streamingMsg;
      const isCurrentConversation = conversationId === CHAT.currentConversationId;
      // 按 timestamp 排序后拼接
      const sortedFragments = [...streamingMsg.fragments].sort((a, b) => a.timestamp - b.timestamp);
      const finalContent = sortedFragments.map(f => f.text).join('');
      console.log(`最终拼接: "${finalContent}"`);

      const cleanedContent = cleanSpecialMarkers(finalContent);

      if (cleanedContent.trim()) {
        const completedMsg: any = {
          id: messageId,
          conversationId: streamingMsg.conversationId,
          senderId: streamingMsg.senderId,
          content: JSON.stringify({
            message: cleanedContent,
            dialogueTask: streamingMsg.dialogueTask,
            dialogueTaskFileList: streamingMsg.dialogueTaskFileList,
          }),
          type: 10,
          channelType: 'simple',
          status: 0,
          protocolType: 1,
          gmtCreate: new Date(streamingMsg.realCreateTime).toISOString(),
          gmtUpdate: new Date().toISOString(),
          showTime: null, // 默认不显示时间
          _sortTime: streamingMsg.startTime,
          dialogueTask: streamingMsg.dialogueTask,
          dialogueTaskFileList: streamingMsg.dialogueTaskFileList,
          recommendedQuestionList: streamingMsg.recommendedQuestionList,
          ifStream: false,
        };

        // 存储到对应对话的 newMessages
        if (!CHAT.newMessages.has(conversationId)) {
          CHAT.newMessages.set(conversationId, []);
        }
        const newMsgList = CHAT.newMessages.get(conversationId);
        // 按时间顺序插入（保持有序）
        const insertIndex = newMsgList.findIndex(
          (m: any) => m._sortTime > streamingMsg.startTime
        );

        if (insertIndex === -1) {
          // 追加到末尾
          if (newMsgList.length === 0) {
            // 第一条消息，显示时间
            completedMsg.showTime = formatMessageTime(completedMsg.gmtCreate);
          } else {
            // 和最后一条消息比较时间差
            const lastMsg = newMsgList[newMsgList.length - 1];
            const currentTime = new Date(completedMsg.gmtCreate).getTime();
            const lastTime = new Date(lastMsg.gmtUpdate || lastMsg.gmtCreate).getTime();

            if (Math.abs(currentTime - lastTime) >= TIME_THRESHOLD) {
              completedMsg.showTime = formatMessageTime(completedMsg.gmtCreate);
            }
          }
          newMsgList.push(completedMsg);

        } else {
          // 插入到中间位置
          if (insertIndex === 0) {
            // 插入到开头，显示时间
            completedMsg.showTime = formatMessageTime(completedMsg.gmtCreate);
          } else {
            // 和前一条消息比较时间差
            const previousMsg = newMsgList[insertIndex - 1];
            const currentTime = new Date(completedMsg.gmtCreate).getTime();
            const previousTime = new Date(previousMsg.gmtUpdate || previousMsg.gmtCreate).getTime();

            if (Math.abs(currentTime - previousTime) >= TIME_THRESHOLD) {
              completedMsg.showTime = formatMessageTime(completedMsg.gmtCreate);
            }
          }

          newMsgList.splice(insertIndex, 0, completedMsg);

          // 更新后续消息的 showTime
          for (let i = insertIndex + 1; i < newMsgList.length; i++) {
            const currentMsg = newMsgList[i];
            const previousMsg = newMsgList[i - 1];

            const currentTime = new Date(currentMsg.gmtCreate).getTime();
            const previousTime = new Date(previousMsg.gmtUpdate || previousMsg.gmtCreate).getTime();

            if (Math.abs(currentTime - previousTime) >= TIME_THRESHOLD) {
              currentMsg.showTime = formatMessageTime(currentMsg.gmtCreate);
            } else {
              currentMsg.showTime = null;
            }
          }
        }
        console.log(`✅ 消息 ${messageId} 已完成: "${cleanedContent}"`);
      }

      CHAT.streamingMessages.delete(messageId);
      // 只有当前对话才刷新 UI
      if (isCurrentConversation) {
        CHAT.flushUI();
      }
      // 对话完成后更新 isConversationComplete 状态
      // dispatch(refreshTravelPlanningGroupChatPageIsConversationCompleteState(Math.random()));
    },

    scheduleCompleteMessage: function(messageId: string) {
      const streamingMsg = CHAT.streamingMessages.get(messageId);
      if (!streamingMsg) return;

      if (streamingMsg.doneTimerId) {
        window.clearTimeout(streamingMsg.doneTimerId);
      }

      streamingMsg.doneTimerId = window.setTimeout(() => {
        const latestStreamingMsg = CHAT.streamingMessages.get(messageId);
        if (!latestStreamingMsg || !latestStreamingMsg.isDone) return;

        latestStreamingMsg.doneTimerId = null;
        CHAT.completeMessage(messageId);
      }, DONE_COMPLETE_DELAY);
    },

    // UI 更新：只显示当前对话
    doUpdateUI: function() {
      const currentConvId = CHAT.currentConversationId;
      if (!currentConvId) {
        CHAT.needsUpdate = false;
        return;
      }

      // 只获取当前对话的流式消息，并转换为显示格式
      const streamingArray: any[] = [];
      CHAT.streamingMessages.forEach((msg: StreamingMessage) => {
        if (msg.conversationId === currentConvId) {
          // 按 timestamp 排序片段，拼接成当前内容
          const sortedFragments = [...msg.fragments].sort((a, b) => a.timestamp - b.timestamp);
          const currentContent = sortedFragments.map(f => f.text).join('');

          streamingArray.push({
            id: msg.messageId,
            conversationId: msg.conversationId,
            senderId: msg.senderId,
            content: currentContent,
            type: 10,
            channelType: 'simple',
            status: 0,
            protocolType: 1,
            gmtCreate: new Date(msg.realCreateTime).toISOString(),
            gmtUpdate: new Date().toISOString(),
            showTime: null, // 流式消息不显示时间
            _sortTime: msg.startTime,  // 新增
            dialogueTask: msg.dialogueTask,
            dialogueTaskFileList: msg.dialogueTaskFileList,
            recommendedQuestionList: msg.recommendedQuestionList,
            ifStream: true,
          });
        }
      });

      // 按 startTime 排序流式消息
      streamingArray.sort((a, b) => a._sortTime - b._sortTime);

      // 只获取当前对话的已完成新消息
      const newMsgArray = CHAT.newMessages.get(currentConvId) || [];

      if (streamingArray.length > 0) {
        // 流式消息的第一条需要和已完成消息的最后一条比较
        if (newMsgArray.length > 0) {
          const lastCompletedMsg = newMsgArray[newMsgArray.length - 1];
          const firstStreamingMsg = streamingArray[0];

          const streamingTime = new Date(firstStreamingMsg.gmtCreate).getTime();
          const lastTime = new Date(lastCompletedMsg.gmtUpdate || lastCompletedMsg.gmtCreate).getTime();

          if (Math.abs(streamingTime - lastTime) >= TIME_THRESHOLD) {
            firstStreamingMsg.showTime = formatMessageTime(firstStreamingMsg.gmtCreate);
          }
        } else {
          // 如果没有已完成消息，第一条流式消息显示时间
          streamingArray[0].showTime = formatMessageTime(streamingArray[0].gmtCreate);
        }
      }
      // 合并：已完成新消息 + 流式消息
//       const newAndStreamingMessages = [...newMsgArray, ...streamingArray];
      const completedNewMessages = newMsgArray.map((msg: any) => ({ ...msg, ifStream: false }));
      const newAndStreamingMessages = [...completedNewMessages, ...streamingArray].sort((a, b) => a._sortTime - b._sortTime);
      const historyMessages = (CHAT.messageList || []).map((msg: any) => ({ ...msg, ifStream: false }));
      const allMessages = [...historyMessages, ...newAndStreamingMessages];
      dispatch(refreshDialogueComponentLatestNewsRecordEntityState(allMessages));
      CHAT.needsUpdate = false;
    },

    updateUI: function() {
      if (!CHAT.currentConversationId) return;

      CHAT.needsUpdate = true;
      if (CHAT.rafId) return;
      CHAT.rafId = requestAnimationFrame(() => {
        CHAT.rafId = null;
        if (CHAT.needsUpdate) {
          CHAT.doUpdateUI();
        }
      });
    },

    flushUI: function() {
      if (!CHAT.currentConversationId) return;

      if (CHAT.rafId) {
        cancelAnimationFrame(CHAT.rafId);
        CHAT.rafId = null;
      }
      CHAT.doUpdateUI();
    },

    // ========== 工具方法 ==========
    getNewMessageCount: function(conversationId: string) {
      return (CHAT.newMessages.get(conversationId) || []).length;
    },

    getConversationsWithNewMessages: function() {
      const result: string[] = [];
      CHAT.newMessages.forEach((msgs, convId) => {
        if (msgs.length > 0) result.push(convId);
      });
      return result;
    },

    clearNewMessages: function(conversationId: string) {
      CHAT.newMessages.delete(conversationId);
    },

    // 修改：按 conversationId 筛选清理
    clearStreamingMessages: function(conversationId: string) {
      const keysToDelete: string[] = [];
      CHAT.streamingMessages.forEach((msg: StreamingMessage, messageId: string) => {
        if (msg.conversationId === conversationId) {
          keysToDelete.push(messageId);
        }
      });
      keysToDelete.forEach(key => CHAT.streamingMessages.delete(key));
    },

    clearNewMessagesBefore: function(conversationId: string, beforeTime: string | null) {
      if (!beforeTime) {
        CHAT.newMessages.delete(conversationId);
        return;
      }

      const msgs = CHAT.newMessages.get(conversationId) || [];
      const beforeTimestamp = new Date(beforeTime).getTime();
      const remaining = msgs.filter(msg => {
        const msgTime = new Date(msg.gmtCreate || msg.gmtUpdate).getTime();
        return msgTime > beforeTimestamp;
      });

      if (remaining.length > 0) {
        CHAT.newMessages.set(conversationId, remaining);
      } else {
        CHAT.newMessages.delete(conversationId);
      }
    },

    init: function() {
      if (!window.WebSocket) {
        console.error('浏览器不支持 WebSocket');
        return;
      }

      CHAT.socket = new WebSocket(websocketUrl);

      CHAT.socket.onopen = function() {
        const loginDataModel = {
          id: '1',
          type: 4,
          transferType: 1,
          identity: { token: userId },
        };
        CHAT.socket.send(JSON.stringify(loginDataModel));
        console.log(' ✅ 已发送认证信息');
      };

      CHAT.socket.onmessage = function(e) {
        console.log('收到消息:', e.data);
        try {
          const messageData = JSON.parse(e.data);
          const { id: messageId, conversationId, message: content, senderId, timestamp } = messageData;

          const isCurrentConversation = conversationId === CHAT.currentConversationId;

          // ========== 先处理所有已标记 isDone 的消息的计数 ==========
          // 同一 messageId 的迟到片段会重置计数；只有同一 conversationId 的其他消息才减少计数
          const toComplete: string[] = [];
          CHAT.streamingMessages.forEach((msg: StreamingMessage, msgId: string) => {
            if (msg.isDone) {
              if (msgId === messageId && content !== '[DONE]' && !SPECIAL_MARKERS.includes(content)) {
                // 收到同一 messageId 的迟到片段，重置计数
                msg.remainingCount = 10;
              } else if (msg.conversationId === conversationId) {
                // 收到同一会话的其他消息，计数减1
                msg.remainingCount--;
                if (msg.remainingCount <= 0) {
                  toComplete.push(msgId);
                }
              }
            }
          });

          // 完成计数归零的消息
          toComplete.forEach((msgId) => {
            CHAT.completeMessage(msgId);
          });

          // ========== [DONE] 标记处理 ==========
          if (content === '[DONE]') {
            const streamingMsg = CHAT.streamingMessages.get(messageId);

            if (streamingMsg) {
              streamingMsg.isDone = true;
              streamingMsg.doneTimestamp = timestamp;
              streamingMsg.remainingCount = 10; // 最多再等 10 条消息
              applyDialogueTaskPayload(streamingMsg, messageData);
            } else {
              // [DONE] 先于所有片段到达，创建一个空的 streamingMsg
              console.warn(`收到 [DONE] 但未找到消息 ${messageId}，创建空消息等待片段`);
              const dialogueTaskPayload = getDialogueTaskPayload(messageData);
              const emptyStreamingMsg: StreamingMessage = {
                messageId,
                conversationId,
                senderId,
                fragments: [],
                startTime: timestamp,
                realCreateTime: Date.now(),
                isDone: true,
                doneTimestamp: timestamp,
                remainingCount: 10,
                doneTimerId: null,
                ...dialogueTaskPayload,
              };
              CHAT.streamingMessages.set(messageId, emptyStreamingMsg);
            }
            CHAT.scheduleCompleteMessage(messageId);
            return;
          }

          // 处理对话结束标记 [END]
          if (content === '[END]') {
            console.log('收到对话结束标记 [END]，更新对话状态');
            // 将对话状态更新为已完成（status=2），更新成功后再触发总结
            // (async () => {
            //   try {
            //     await updateDialogueStatusToCompleted(conversationId);
            //     // 数据库更新成功后，触发总结显示
            //     dispatch(refreshTravelPlanningGroupChatPageIsConversationCompleteState(Math.random()));
            //   } catch (error) {
            //     console.error('处理对话结束时出错:', error);
            //   }
            // })();
            message.success('任务执行完成');
            return;
          }

          // 过滤其他特殊标记
          if (SPECIAL_MARKERS.includes(content)) {
            console.log(`忽略特殊标记: ${content}`);
            return;
          }

          // ========== 流式消息累积 ==========
          let streamingMsg = CHAT.streamingMessages.get(messageId);

          if (!streamingMsg) {
            // 新消息
            const dialogueTaskPayload = getDialogueTaskPayload(messageData);
            streamingMsg = {
              messageId,
              conversationId,
              senderId,
              fragments: [{ timestamp, text: content }],
              startTime: timestamp,
              realCreateTime: Date.now(),
              isDone: false,
              doneTimestamp: null,
              remainingCount: 0,
              doneTimerId: null,
              ...dialogueTaskPayload,
            };
            CHAT.streamingMessages.set(messageId, streamingMsg);
            console.log(`开始消息 ${messageId} 的流式传输`);
          } else {
            // 追加片段（即使已经收到 DONE 也继续接收，不检查时间戳）
            streamingMsg.fragments.push({ timestamp, text: content });
            applyDialogueTaskPayload(streamingMsg, messageData);
            if (timestamp < streamingMsg.startTime) {
              streamingMsg.startTime = timestamp;
            }
            if (streamingMsg.isDone) {
              streamingMsg.remainingCount = 10;
              CHAT.scheduleCompleteMessage(messageId);
            }
          }

          // 只有当前对话才更新 UI
          if (isCurrentConversation) {
            CHAT.updateUI();
          }

        } catch (error) {
          console.error('解析消息失败:', error);
        }
      };

      CHAT.socket.onerror = function(e) {
        console.error('WebSocket 错误:', e);
      };

      CHAT.socket.onclose = function(e) {
        console.log('WebSocket 连接关闭');
        if (CHAT.rafId) {
          cancelAnimationFrame(CHAT.rafId);
          CHAT.rafId = null;
        }
        if (CHAT.streamingMessages) {
          CHAT.streamingMessages.forEach((msg: StreamingMessage) => {
            if (msg.doneTimerId) {
              window.clearTimeout(msg.doneTimerId);
            }
          });
          CHAT.streamingMessages.clear();
        }
        if (CHAT.newMessages) {
          CHAT.newMessages.clear();
        }
      };
    },
  };

  CHAT.init();
  return {};
};
