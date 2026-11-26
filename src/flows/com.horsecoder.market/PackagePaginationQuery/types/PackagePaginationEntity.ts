
/**
 * 套餐分页实体
 */
export type PackagePaginationEntity = {

  /**
   * 套餐ID
   */
  id?: string;

  /**
   * 套餐名
   */
  packageName?: string;

  /**
   * 套餐描述
   */
  packageDescription?: string;

  /**
   * 套餐金额
   */
  packageAmount?: number;

  /**
   * 积分数量
   */
  numberOfPoints?: number;

  /**
   * 免费模板数量
   */
  numberOfFreeTemplates?: number;

  /**
   * 免费场景数量
   */
  numberOfFreeScenes?: number;

  /**
   * 免费流程数量
   */
  freeFlowQuantity?: number;

  /**
   * 可创建项目最大数
   */
  maxNumberOfProjects?: number;

  /**
   * 套餐类型
   */
  packageType?: number;

  /**
   * 套餐周期单位
   */
  packageCycleUnit?: number;

  /**
   * 套餐状态
   */
  packageStatus?: string;

  /**
   * 更新时间
   */
  gmtUpdate?: number;

  /**
   * 创建时间
   */
  gmtCreate?: number;

}
