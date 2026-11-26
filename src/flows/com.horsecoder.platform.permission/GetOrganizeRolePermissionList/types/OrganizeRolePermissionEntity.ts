
/**
 * 组织角色权限实体
 */
export type OrganizeRolePermissionEntity = {

  /**
   * 权限ID
   */
  id?: string;

  /**
   * 权限标题
   */
  title: string;

  /**
   * 来源组织ID
   */
  sourceOrganizeId: string;

  /**
   * 关键字
   */
  keyword: string;

  /**
   * 描述
   */
  description?: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

  /**
   * 是否分配
   */
  whetherAllocate?: string;

}
