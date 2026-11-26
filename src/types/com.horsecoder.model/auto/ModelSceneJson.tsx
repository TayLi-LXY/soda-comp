
/**
 * 模型场景文件
 */
export type ModelSceneJson = {

  /**
   * 模型场景文件ID
   */
  readonly id: string;

  /**
   * 模型场景ID
   */
  modelSceneId?: string;

  /**
   * 模型id
   */
  modelId?: string;

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
   * 版本号
   */
  version: string;

  /**
   * 前置版本
   */
  preVersion?: string;

  /**
   * 子模型标题
   */
  title?: string;

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
   * 是否最新版本
   */
  ifNewest: number;

  /**
   * 模型状态
   */
  status: string;

  /**
   * 文件锁定人
   */
  lockedBy?: string;

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
