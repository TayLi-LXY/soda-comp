
/**
 * 订单产品
 */
export type OrderProduct = {

  /**
   * 订单产品ID
   */
  readonly id: string;

  /**
   * 订单ID
   */
  orderId: string;

  /**
   * 产品ID
   */
  productId?: string;

  /**
   * 原始单价
   */
  originalUnitPrice: number;

  /**
   * 产品数量
   */
  number: number;

  /**
   * 原价
   */
  originalPrice: number;

  /**
   * 实付
   */
  actualPayment: number;

  /**
   * 状态
   */
  status: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
