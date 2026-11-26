
/**
 * 项目
 */
export type Project = {

  /**
   * 项目ID
   */
  readonly id: string;

  /**
   * 空间ID
   */
  spaceId: string;

  /**
   * 负责人ID
   */
  userId: string;

  /**
   * 项目名
   */
  projectName: string;

  /**
   * 项目描述
   */
  description?: string;

  /**
   * 模型ID
   */
  modelId?: string;

  /**
   * 组织ID
   */
  organizeId: string;

  /**
   * 创建人ID
   */
  creatorId: string;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

}
