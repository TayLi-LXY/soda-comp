
/**
 * 大模型交互历史实体
 */
export type LargeModelActionHistoricalEntity = {

  /**
   * 角色
   */
  role?: string;

  /**
   * token消耗
   */
  tokenConsumption?: number;

  /**
   * 执行时间
   */
  executionTime?: number;

  /**
   * 金额消耗
   */
  amountConsumption?: number;

  /**
   * 内容
   */
  content?: string;

}
