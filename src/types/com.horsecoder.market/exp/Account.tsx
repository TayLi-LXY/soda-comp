
/**
 * 营销账户
 */
export type Account = {

  /**
   * 营销账户ID
   */
  readonly id: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 支付账户ID
   */
  paymentAccountId?: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
