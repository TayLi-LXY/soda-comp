
/**
 * 模型筛选
 */
export type ModelSelection = {

  /**
   * 模型ID
   */
  id?: string;

  /**
   * 空间ID
   */
  spaceId?: string;

  /**
   * 关联项目ID
   */
  projectId?: string;

  /**
   * 模型标题
   */
  title?: string;

  /**
   * 模型名称
   */
  name?: string;

  /**
   * 组织ID
   */
  organizeId: string;

  /**
   * 创建人ID
   */
  creatorId: string;

  /**
   * 模型IdIn
   */
  modelIdIn?: string[];

}
