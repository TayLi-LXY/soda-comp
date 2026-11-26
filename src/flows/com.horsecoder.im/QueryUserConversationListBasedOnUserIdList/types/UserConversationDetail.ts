import type { MessageEntity } from '@/flows/com.horsecoder.im/QueryUserConversationListBasedOnUserIdList/types/MessageEntity';

/**
 * 用户对话详情
 */
export type UserConversationDetail = {

  /**
   * IM用户对话ID
   */
  id?: string;

  /**
   * IM用户管理ID
   */
  imUserId: string;

  /**
   * 对话类型
   */
  type: number;

  /**
   * 状态
   */
  status: number;

  /**
   * IM会话Id
   */
  imConversationId: string;

  /**
   * 名字
   */
  name: string;

  /**
   * 接收人ID
   */
  receiverId: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

  /**
   * 会话名称
   */
  conversationName: string;

  /**
   * 最新一条消息
   */
  latestMessage?: MessageEntity;

}
