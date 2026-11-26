
/**
 * 对话详情模型设计过程模型
 */
export type DialogueDetailsModelDesignProcessModel = {

  /**
   * 对话模型设计过程ID
   */
  id?: string;

  /**
   * 对话详情ID
   */
  dialogueDetailsId: string;

  /**
   * 模型文件ID
   */
  modelJsonId: string;

  /**
   * 模型文件名称
   */
  name: string;

  /**
   * 模型文件类型
   */
  modelJsonType: string;

  /**
   * 状态
   */
  status: string;

  /**
   * 代码文件Url
   */
  codeFileUrl?: string;

  /**
   * 对话模型ID
   */
  dialogueModelId: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
