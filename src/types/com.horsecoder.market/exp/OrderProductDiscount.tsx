
/**
 * 订单产品折扣
 */
export type OrderProductDiscount = {

  /**
   * 订单产品折扣ID
   */
  readonly id: string;

  /**
   * 订单ID
   */
  orderId: string;

  /**
   * 折扣ID
   */
  discountId: string;

  /**
   * 产品ID
   */
  productId: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
