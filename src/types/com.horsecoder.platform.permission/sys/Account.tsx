
/**
 * 账户
 */
export type Account = {

  /**
   * 账户Id
   */
  readonly id: string;

  /**
   * 账户标题
   */
  title: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
