
/**
 * 对话详情实体
 */
export type DialogueDetailsEntity = {

  /**
   * 对话详情ID
   */
  id?: string;

  /**
   * 对话ID
   */
  dialogueId: string;

  /**
   * 发送消息
   */
  sendMessage: string;

  /**
   * 回复信息
   */
  replyMessage: string;

  /**
   * 类型
   */
  type?: string;

  /**
   * 对话语音url
   */
  dialogueVoiceUrl: string;

}
