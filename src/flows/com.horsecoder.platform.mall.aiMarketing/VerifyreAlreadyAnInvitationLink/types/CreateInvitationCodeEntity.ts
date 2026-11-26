
/**
 * 创建邀请码实体
 */
export type CreateInvitationCodeEntity = {

  /**
   * 用户ID
   */
  userId?: string;

  /**
   * 空间ID
   */
  spaceId?: string;

  /**
   * 前缀URL
   */
  prefixURL?: string;

  /**
   * 对话ID
   */
  conversationId?: string;

}
