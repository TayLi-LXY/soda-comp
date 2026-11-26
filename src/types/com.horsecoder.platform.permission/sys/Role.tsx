
/**
 * 角色
 */
export type Role = {

  /**
   * 角色ID
   */
  readonly id: string;

  /**
   * 组织Id
   */
  organizeId: string;

  /**
   * 角色标题
   */
  title: string;

  /**
   * 父角色ID
   */
  parentRoleId?: string;

  /**
   * 关键字
   */
  keyword: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
