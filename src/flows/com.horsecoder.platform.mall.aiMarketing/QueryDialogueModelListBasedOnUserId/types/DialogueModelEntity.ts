
/**
 * 对话模型实体
 */
export type DialogueModelEntity = {

  /**
   * 对话模型ID
   */
  id?: string;

  /**
   * 对话ID
   */
  dialogueId: string;

  /**
   * 模型ID
   */
  modelId: string;

  /**
   * 项目ID
   */
  projectId: string;

  /**
   * 更新时间
   */
  gmtUpdate?: number;

  /**
   * 创建时间
   */
  gmtCreate?: number;

  /**
   * 项目名称
   */
  projectName?: string;

  /**
   * 项目描述
   */
  projectDescription?: string;

}
