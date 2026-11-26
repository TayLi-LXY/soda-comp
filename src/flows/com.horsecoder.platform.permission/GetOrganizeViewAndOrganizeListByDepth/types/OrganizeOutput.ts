
/**
 * 组织输出
 */
export type OrganizeOutput = {

  /**
   * 组织Id
   */
  id?: string;

  /**
   * 组织标题
   */
  title: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 创建账户ID
   */
  accountId: string;

  /**
   * 组织类型ID
   */
  organizeTypeId: string;

  /**
   * 父组织ID
   */
  parentId: string;

  /**
   * 创建时间
   */
  gmtCreate: number;

  /**
   * 更新时间
   */
  gmtUpdate: number;

}
