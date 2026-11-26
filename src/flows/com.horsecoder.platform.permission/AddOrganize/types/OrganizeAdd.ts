
/**
 * 组织新增
 */
export type OrganizeAdd = {

  /**
   * 组织标题
   */
  title: string;

  /**
   * 组织类型Id
   */
  organizeTypeId?: string;

  /**
   * 上级组织Id
   */
  parentOrganizeId?: string;

  /**
   * 上层组织Id
   */
  layerOrganizeId?: string;

  /**
   * 管理账户Id
   */
  adminAccountId: string;

  /**
   * 备注
   */
  remark?: string;

  /**
   * 组织名称
   */
  name?: string;

  /**
   * 创建账户ID
   */
  createAccountId: string;

}
