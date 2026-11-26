
/**
 * 积分消耗实体
 */
export type PointsConsumptionEntity = {

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

}
