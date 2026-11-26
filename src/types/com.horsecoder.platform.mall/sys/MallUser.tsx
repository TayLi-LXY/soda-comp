import type { UserAddress } from './UserAddress';
import type { Cart } from './Cart';

/**
 * 商城用户
 */
export type MallUser = {

  /**
   * 商城用户ID
   */
  readonly id: string;

  /**
   * 手机号
   */
  phone: string;

  /**
   * 密码
   */
  password: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

  /**
   * 商城用户的ID关联的购物车
   */
  cart?: Cart;

  /**
   * 商城用户的ID关联的用户地址列表
   */
  userAddressList?: UserAddress[];

}
