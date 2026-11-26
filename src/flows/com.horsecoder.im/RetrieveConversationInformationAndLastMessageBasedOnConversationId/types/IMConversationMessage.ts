
/**
 * IM会话消息
 */
export type IMConversationMessage = {

  /**
   * IM会话消息ID
   */
  id?: string;

  /**
   * 消息ID
   */
  imMessageId: string;

  /**
   * IM会话ID
   */
  imConversationId: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

  /**
   * 消息内容
   */
  messageContent?: string;

}
