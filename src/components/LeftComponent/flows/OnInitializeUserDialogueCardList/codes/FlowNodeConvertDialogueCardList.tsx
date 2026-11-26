import type { UserConversationDetail } from '@/flows/com.horsecoder.im/QueryUserConversationListBasedOnUserIdList/types/UserConversationDetail';
import { forwardIndexMain } from '@/src/logic/forwards';

/**
 * 入参明细:
 * userConversationDetail 用户对话详情
 * conversationId 对话ID
 * setter 页面设置器
 */
export interface FlowNodeConvertDialogueCardListParams {
  userConversationDetail: UserConversationDetail[];
  conversationId: any;
  setter: any;
}

/**
 * 出参明细:
 * dialogueCardList 对话卡片列表
 */
export interface FlowNodeConvertDialogueCardListResults {
  dialogueCardList: any;
}

/**
 * 转化对话卡片列表
 * FLOW_NODE_CONVERT_DIALOGUE_CARD_LIST
 * 唯一id: LeftComponent/FLOW_NODE_CONVERT_DIALOGUE_CARD_LIST
 */
export const flowNodeConvertDialogueCardList = async (params: FlowNodeConvertDialogueCardListParams): Promise<FlowNodeConvertDialogueCardListResults> => {
  // 初始化流程出参
  let dialogueCardList;
  // 开始流程
  const { userConversationDetail } = params;
  const { conversationId } = params;
  const { setter } = params;

  dialogueCardList = (userConversationDetail || []).map((item, index) => {
    const latestMessage = item.latestMessage;
    const displayName = item.conversationName || item.name || '未命名对话';

    return {
      id: item.imConversationId,
      name: displayName,
      creatorId: item.imUserId,
      creatorName: item.name || displayName,
      type: item.type === 2 ? '群聊' : '单聊',
      imConversationId: item.imConversationId,
      state: item.status,
      avatar: '',
      gmtUpdate: item.gmtUpdate,
      gmtCreate: item.gmtCreate,
      recentMessageContent: latestMessage?.content || '',
      lastMessageTime: latestMessage?.gmtUpdate || latestMessage?.gmtCreate || item.gmtUpdate,
      unreadMessageCount: (item as any).unreadMessageCount || 0,
      userConversationId: item.id || '',
      ifSelected: conversationId ? conversationId === item.imConversationId : index === 0,
    };
  });
  if (!conversationId && userConversationDetail && userConversationDetail.length > 0) {
      forwardIndexMain({query: {id: userConversationDetail[0].imConversationId}});
  }
  if (!conversationId && (!userConversationDetail || userConversationDetail.length === 0)) {
      setter.setIfFirstLogWithoutConversation(true);
  }
  
  // 结束流程
  return {
    dialogueCardList,
  }
};
