
/**
 * 权限
 */
export type Permission = {

  /**
   * 权限ID
   */
  readonly id: string;

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
   * 来源关键字模板
   */
  sourceKeywordTemplate?: string;

  /**
   * 描述
   */
  description?: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
