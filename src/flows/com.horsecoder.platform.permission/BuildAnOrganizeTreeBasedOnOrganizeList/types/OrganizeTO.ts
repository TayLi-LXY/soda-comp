
/**
 * 组织TO
 */
export type OrganizeTO = {

  /**
   * 组织Id
   */
  id?: string;

  /**
   * 组织标题
   */
  title: string;

  /**
   * 组织名称
   */
  name: string;

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
   * 组织人数
   */
  staffNum: number;

  /**
   * 备注
   */
  remark?: string;

  /**
   * 创建账户ID
   */
  createAccountId: string;

  /**
   * 创建时间
   */
  gmtCreate: number;

  /**
   * 更新时间
   */
  gmtUpdate: number;

}
