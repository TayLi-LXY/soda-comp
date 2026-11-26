
/**
 * 组织信息
 */
export type OrganizeInformation = {

  /**
   * 组织Id
   */
  id?: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 组织人数
   */
  staffNum: number;

  /**
   * 备注
   */
  remark?: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

  /**
   * 组织类型
   */
  organizeType: string;

  /**
   * 组织管理员
   */
  organizeAdministrator: string;

}
