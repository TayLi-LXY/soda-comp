
/**
 * 组织筛选
 */
export type OrganizeFiltering = {

  /**
   * 组织Id
   */
  id?: string;

  /**
   * 组织IDIn
   */
  idIn?: string[];

  /**
   * 组织类型Id
   */
  organizeTypeId?: string;

  /**
   * 组织类型IDIn
   */
  organizeTypeIdIn?: string[];

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
  adminAccountId?: string;

  /**
   * 组织标题
   */
  title?: string;

  /**
   * 组织名称
   */
  name?: string;

  /**
   * 页数
   */
  page?: number;

  /**
   * 行数
   */
  rows?: number;

  /**
   * 排序
   */
  orderBy?: string[];

  /**
   * 创建时间from
   */
  gmtCreateFrom?: number;

  /**
   * 创建时间To
   */
  gmtCreateTo?: number;

}
