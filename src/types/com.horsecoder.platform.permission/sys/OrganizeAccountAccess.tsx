
/**
 * 组织账户权限访问
 */
export type OrganizeAccountAccess = {

  /**
   * 组织账户权限访问ID
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
   * 访问类型
   */
  accessType: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
