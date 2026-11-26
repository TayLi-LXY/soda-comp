
/**
 * 模型场景
 */
export type ModelScene = {

  /**
   * 模型场景ID
   */
  readonly id: string;

  /**
   * 场景标题
   */
  title?: string;

  /**
   * 场景名称
   */
  name: string;

  /**
   * 场景描述
   */
  description?: string;

  /**
   * 场景封面
   */
  cover?: string;

  /**
   * 来源模型id
   */
  sourceModelId?: string;

  /**
   * 类型
   */
  type?: string;

  /**
   * 子类型
   */
  subType?: string;

  /**
   * 是否最新版本
   */
  ifNewest: number;

  /**
   * 组织ID
   */
  organizeId: string;

  /**
   * 创建人ID
   */
  creatorId: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
