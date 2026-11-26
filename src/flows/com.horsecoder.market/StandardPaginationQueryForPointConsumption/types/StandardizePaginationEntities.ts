
/**
 * 规范分页实体
 */
export type StandardizePaginationEntities = {

  /**
   * 积分消耗规范ID
   */
  id?: string;

  /**
   * 规范类型
   */
  standardType?: number;

  /**
   * 消耗积分场景
   */
  scenarioOfConsumingPoints?: string;

  /**
   * 消耗积分场景标题
   */
  titleForConsumingPoints?: string;

  /**
   * 积分消耗
   */
  pointsConsumption?: number;

  /**
   * 单位
   */
  unit?: number;

  /**
   * 更新时间
   */
  gmtUpdate?: number;

  /**
   * 创建时间
   */
  gmtCreate?: number;

}
