
/**
 * 组织账户权限
 */
export type OrganizeAccountPermission = {

  /**
   * 组织账户权限ID
   */
  readonly id: string;

  /**
   * 组织账户ID
   */
  organizeAccountId: string;

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
