
/**
 * 支付账户
 */
export type Account = {

  /**
   * 支付账户ID
   */
  readonly id: string;

  /**
   * 账户类型
   */
  accountType: number;

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

}
