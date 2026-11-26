
/**
 * 组织下账户
 */
export type AccountUnderOrganize = {

  /**
   * 组织账户ID
   */
  organizeAccountId: string;

  /**
   * 账户ID
   */
  accountId: string;

  /**
   * 标题
   */
  title: string;

  /**
   * gmtCreate
   */
  gmtCreate: number;

  /**
   * gmtUpdate
   */
  gmtUpdate: number;

  /**
   * 角色名称
   */
  name?: string;

}
