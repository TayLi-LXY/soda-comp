
/**
 * 组织账户
 */
export type OrganizeAccount = {

  /**
   * 组织账户Id
   */
  readonly id: string;

  /**
   * 账户Id
   */
  accountId?: string;

  /**
   * 组织Id
   */
  organizeId?: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
