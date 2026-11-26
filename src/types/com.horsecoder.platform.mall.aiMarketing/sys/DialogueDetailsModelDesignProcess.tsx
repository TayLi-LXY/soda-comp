
/**
 * 对话详情模型设计过程
 */
export type DialogueDetailsModelDesignProcess = {

  /**
   * 对话详情模型设计过程ID
   */
  readonly id: string;

  /**
   * 对话详情ID
   */
  dialogueDetailsId: string;

  /**
   * 模型文件ID
   */
  modelJsonId: string;

  /**
   * 模型文件类型
   */
  type: string;

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
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
