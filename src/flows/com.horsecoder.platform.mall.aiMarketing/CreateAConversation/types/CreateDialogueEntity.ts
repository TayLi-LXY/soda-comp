
/**
 * 创建对话实体
 */
export type CreateDialogueEntity = {

  /**
   * 对话ID
   */
  id?: string;

  /**
   * 对话名称
   */
  dialogueName: string;

  /**
   * 对话类型
   */
  dialogueType?: string;

  /**
   * 对话账户ID
   */
  dialogueAccountId: string;

  /**
   * 对话机器人ID
   */
  dialogueRobotId?: string;

  /**
   * 对话模型
   */
  dialogModel: string;

}
