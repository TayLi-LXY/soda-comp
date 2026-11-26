
/**
 * 对话卡片
 */
export interface DialogueCard {

  /**
   * 对话ID
   */
   id?: string;

  /**
   * 名称
   */
   name: string;

  /**
   * 创建人ID
   */
   creatorId: string;

  /**
   * 创建人名称
   */
   creatorName: string;

  /**
   * 类型(单聊 群聊)
   */
   type: string;

  /**
   * IM会话ID
   */
   imConversationId: string;

  /**
   * 状态(0:正常1:删除)
   */
   state: number;

  /**
   * 头像
   */
   avatar: string;

  /**
   * 更新时间
   */
   gmtUpdate: number;

  /**
   * 创建时间
   */
   gmtCreate: number;

  /**
   * 最近一条消息内容
   */
   recentMessageContent?: string;

  /**
   * 最近一条消息时间
   */
   lastMessageTime?: number;

  /**
   * 未读消息数
   */
   unreadMessageCount?: number;

  /**
   * 用户对话ID
   */
   userConversationId: string;

  /**
   * 是否选中
   */
   ifSelected: any;

}
