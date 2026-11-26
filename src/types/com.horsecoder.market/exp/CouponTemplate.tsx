
/**
 * 优惠券模板
 */
export type CouponTemplate = {

  /**
   * 优惠券ID
   */
  readonly id: string;

  /**
   * 发布者账号ID
   */
  publisherId: string;

  /**
   * 优惠券名称
   */
  couponName: string;

  /**
   * 优惠券描述
   */
  description: string;

  /**
   * 优惠券图片地址
   */
  picture?: string;

  /**
   * 优惠券类型
   */
  couponType: number;

  /**
   * 优惠券使用门槛
   */
  achievePrice: number;

  /**
   * 优惠券商品类型限制
   */
  typeLimit?: string;

  /**
   * 优惠券商品限制类型
   */
  restrictionType: number;

  /**
   * 优惠券有效期计算类型
   */
  dateLimitType: number;

  /**
   * 生效时间
   */
  dateLimitLow?: number;

  /**
   * 失效时间
   */
  dateLimitUp?: number;

  /**
   * 优惠券自领取起有效的时间(小时)
   */
  dateLimit?: number;

  /**
   * 总券数量
   */
  total: number;

  /**
   * 剩余券数量
   */
  remain: number;

  /**
   * 可领券的用户群体
   */
  targetGroup?: number;

  /**
   * 互斥类型
   */
  exclusiveType: number;

  /**
   * 互斥限制
   */
  exclusiveLimit?: string;

  /**
   * 优惠券金额
   */
  couponAmount?: number;

  /**
   * 优惠券折扣比例
   */
  couponDiscountRatio?: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
