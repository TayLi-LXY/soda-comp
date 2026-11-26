
/**
 * 模型资源
 */
export type ModelResource = {

  /**
   * 模型资源ID
   */
  readonly id: string;

  /**
   * 模型ID
   */
  modelId?: string;

  /**
   * 子模型ID
   */
  subModelId: string;

  /**
   * 预览路径
   */
  previewPath?: string;

  /**
   * 资源路径
   */
  resourcePath: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 类型
   */
  type: string;

  /**
   * 是否公开
   */
  ifOpen?: number;

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
