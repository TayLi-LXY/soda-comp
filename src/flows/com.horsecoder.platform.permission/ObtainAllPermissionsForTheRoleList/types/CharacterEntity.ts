
/**
 * 角色实体
 */
export type CharacterEntity = {

  /**
   * 角色ID
   */
  id?: string;

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
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
