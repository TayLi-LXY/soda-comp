
/**
 * 活动
 */
export type Promotion = {

  /**
   * 活动ID
   */
  readonly id: string;

  /**
   * 活动名
   */
  name?: string;

  /**
   * 活动描述
   */
  activityDescription: string;

  /**
   * 开始时间
   */
  startTime: number;

  /**
   * 结束时间
   */
  endTime: number;

  /**
   * 活动渠道
   */
  activityChannels: number;

  /**
   * 活动端口
   */
  activityPort: number;

  /**
   * 适用范围
   */
  applicableScope: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
