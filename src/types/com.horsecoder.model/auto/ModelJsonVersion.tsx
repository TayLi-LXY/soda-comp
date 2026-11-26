
/**
 * 模型文件版本
 */
export type ModelJsonVersion = {

  /**
   * 模型文件版本ID
   */
  readonly id: string;

  /**
   * 模型文件ID
   */
  modelJsonId?: string;

  /**
   * 版本
   */
  version: string;

  /**
   * 前置版本
   */
  preVersion?: string;

  /**
   * 是否最新版本
   */
  ifNewest: number;

  /**
   * 模型版本ID
   */
  modelVersionId?: string;

  /**
   * 版本类型
   */
  versionType: string;

  /**
   * 模型ID
   */
  modelId: string;

  /**
   * 子模型ID
   */
  subModelId: string;

  /**
   * 模型文件类型
   */
  type: string;

  /**
   * 子模型文件类型
   */
  subType: string;

  /**
   * 子模型标题
   */
  title: string;

  /**
   * 子模型名称
   */
  name: string;

  /**
   * 模型上层文件路径
   */
  jsonPath: string;

  /**
   * 模型打包文件路径
   */
  zipPath?: string;

  /**
   * 模型需求文件路径
   */
  demandPath?: string;

  /**
   * 是否公开
   */
  ifOpen: number;

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
