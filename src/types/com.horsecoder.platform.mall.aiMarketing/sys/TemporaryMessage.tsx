
/**
 * 主页临时消息表
 */
export type TemporaryMessage = {

  /**
   * 主页临时消息表ID
   */
  readonly id: string;

  /**
   * 对话账户ID
   */
  dialogueAccountId?: string;

  /**
   * 临时消息内容
   */
  temporaryMessageContent?: string;

  /**
   * 文件Url
   */
  fileUrl?: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
