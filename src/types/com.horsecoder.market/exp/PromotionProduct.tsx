
/**
 * 活动产品
 */
export type PromotionProduct = {

  /**
   * 活动产品ID
   */
  readonly id: string;

  /**
   * 产品ID
   */
  productId?: string;

  /**
   * 活动ID
   */
  promotionId?: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
