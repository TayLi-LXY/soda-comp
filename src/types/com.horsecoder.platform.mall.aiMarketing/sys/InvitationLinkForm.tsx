
/**
 * 邀请链接表
 */
export type InvitationLinkForm = {

  /**
   * 邀请链接表ID
   */
  readonly id: string;

  /**
   * 用户ID
   */
  userId?: string;

  /**
   * 对话ID
   */
  conversationId?: string;

  /**
   * 空间ID
   */
  spaceId?: string;

  /**
   * Code码
   */
  codeCode?: string;

  /**
   * 过期时间
   */
  expirationDate?: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
