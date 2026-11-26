
/**
 * 购物车产品
 */
export type CartProducts = {

  /**
   * 购物车产品ID
   */
  readonly id: string;

  /**
   * 购物车ID
   */
  cartId: string;

  /**
   * 产品ID
   */
  productId: string;

  /**
   * 产品数量
   */
  productQuantity: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
