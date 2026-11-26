
/**
 * 模型
 */
export type Model = {

  /**
   * 模型ID
   */
  readonly id: string;

  /**
   * 空间ID
   */
  spaceId: string;

  /**
   * 关联项目ID
   */
  projectId: string;

  /**
   * 模型标题
   */
  title?: string;

  /**
   * 模型名称
   */
  name: string;

  /**
   * 模型描述
   */
  description?: string;

  /**
   * 模型封面
   */
  cover?: string;

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
