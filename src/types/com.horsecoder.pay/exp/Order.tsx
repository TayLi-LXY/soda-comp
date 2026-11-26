
/**
 * 支付订单
 */
export type Order = {

  /**
   * 支付订单ID
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
  orderType: number;

  /**
   * 支付类型
   */
  payType?: number;

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
   * 金额
   */
  money: number;

  /**
   * 订单明细
   */
  orderDetails?: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
