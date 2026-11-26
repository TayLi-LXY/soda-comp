import type { CartProducts } from './CartProducts';

/**
 * 购物车
 */
export type Cart = {

  /**
   * 购物车ID
   */
  readonly id: string;

  /**
   * 用户ID
   */
  userId: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

  /**
   * 购物车的ID关联的购物车产品列表
   */
  cartProductsList?: CartProducts[];

}
