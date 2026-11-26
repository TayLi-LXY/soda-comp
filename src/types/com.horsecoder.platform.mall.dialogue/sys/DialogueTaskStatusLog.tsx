
/**
 * 对话任务状态日志
 */
export type DialogueTaskStatusLog = {

  /**
   * 对话任务状态日志ID
   */
  readonly id: string;

  /**
   * 对话任务ID
   */
  dialogueTaskId: string;

  /**
   * 状态
   */
  status: string;

  /**
   * 日志
   */
  log: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
