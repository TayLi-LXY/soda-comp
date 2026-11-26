
/**
 * 组织角色
 */
export type OrganizeRole = {

  /**
   * 组织角色ID
   */
  readonly id: string;

  /**
   * 组织ID
   */
  organizeId: string;

  /**
   * 角色ID
   */
  roleId: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
