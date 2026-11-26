
/**
 * 新增临时消息
 */
export type AddTemporaryMessage = {

  /**
   * 主页临时消息表ID
   */
  id?: string;

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

}
