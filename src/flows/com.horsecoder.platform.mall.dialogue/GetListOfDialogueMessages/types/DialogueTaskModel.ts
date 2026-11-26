
/**
 * 对话任务模型
 */
export type DialogueTaskModel = {

  /**
   * 对话任务ID
   */
  id?: string;

  /**
   * 对话ID
   */
  dialogueId: string;

  /**
   * 发起人ID
   */
  initiatorId: string;

  /**
   * 输入
   */
  input: string;

  /**
   * 输出
   */
  output?: string;

  /**
   * 状态
   */
  state: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
