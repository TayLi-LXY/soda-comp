
/**
 * 组织权限
 */
export type OrganizePermission = {

  /**
   * 组织权限ID
   */
  readonly id: string;

  /**
   * 组织ID
   */
  organizeId: string;

  /**
   * 权限ID
   */
  permissionId: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
