
/**
 * 权限模型
 */
export type PermissionModel = {

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
   * 来源组织名称
   */
  sourceOrganizeName: string;

  /**
   * 关键字
   */
  keyword: string;

  /**
   * 来源关键字模板
   */
  sourceKeywordTemplate?: string;

  /**
   * 描述
   */
  description?: string;

  /**
   * 创建时间
   */
  gmtCreate?: number;

  /**
   * 更新时间
   */
  gmtUpdate?: number;

}
