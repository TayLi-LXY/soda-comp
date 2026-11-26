
/**
 * 历史记录实体
 */
export type HistoricalRecordEntity = {

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

  /**
   * 更新时间
   */
  gmtUpdate?: number;

  /**
   * 创建时间
   */
  gmtCreate?: number;

}
