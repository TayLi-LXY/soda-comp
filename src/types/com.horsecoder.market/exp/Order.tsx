
/**
 * 产品订单
 */
export type Order = {

  /**
   * 产品订单ID
   */
  readonly id: string;

  /**
   * 账户ID
   */
  accountId: string;

  /**
   * 订单编号
   */
  orderNo: string;

  /**
   * 订单类型
   */
  orderType?: string;

  /**
   * 原价
   */
  originPrice: number;

  /**
   * 实际支付价
   */
  finalPrice: number;

  /**
   * 支付编号
   */
  payNo?: string;

  /**
   * 支付时间
   */
  gmtPay?: number;

  /**
   * 订单状态
   */
  orderState: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
