
/**
 * 对话
 */
export type Dialogue = {

  /**
   * 对话ID
   */
  readonly id: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 创建人ID
   */
  creatorId: string;

  /**
   * 类型
   */
  type: string;

  /**
   * IM会话ID
   */
  imConversationId: string;

  /**
   * 状态
   */
  state: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
