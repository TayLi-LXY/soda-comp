
/**
 * 对话任务
 */
export type DialogueTask = {

  /**
   * 对话任务ID
   */
  readonly id: string;

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
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
