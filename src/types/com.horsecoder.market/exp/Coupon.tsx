
/**
 * 优惠券
 */
export type Coupon = {

  /**
   * 优惠券ID
   */
  readonly id: string;

  /**
   * 优惠券模板ID
   */
  couponTemplateId: string;

  /**
   * 领取账户ID
   */
  accountId: string;

  /**
   * 优惠券状态
   */
  status: number;

  /**
   * 生效时间
   */
  dateLimitLow: number;

  /**
   * 失效时间
   */
  dateLimitUp: number;

  /**
   * 可使用次数
   */
  useNumber: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
