
/**
 * 模型版本
 */
export type ModelVersion = {

  /**
   * 模型版本ID
   */
  readonly id: string;

  /**
   * 模型ID
   */
  modelId: string;

  /**
   * 版本
   */
  version: string;

  /**
   * 前置版本
   */
  preVersion: string;

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
