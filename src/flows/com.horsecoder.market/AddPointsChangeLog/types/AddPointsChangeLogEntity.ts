
/**
 * 新增积分变化日志实体
 */
export type AddPointsChangeLogEntity = {

  /**
   * 积分变化日志ID
   */
  id?: string;

  /**
   * 积分ID
   */
  integralId?: string;

  /**
   * 用户ID
   */
  userId?: string;

  /**
   * 变化详情
   */
  changeDetails?: string;

  /**
   * 积分变化
   */
  integralChange?: string;

  /**
   * 变化后积分
   */
  integralAfterChange?: string;

  /**
   * 套餐类型
   */
  packageType?: string;

  /**
   * 日志类型
   */
  logType?: string;

}
