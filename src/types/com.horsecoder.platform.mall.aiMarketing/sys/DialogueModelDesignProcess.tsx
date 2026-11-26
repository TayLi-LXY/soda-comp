
/**
 * 对话模型设计过程
 */
export type DialogueModelDesignProcess = {

  /**
   * 对话模型设计过程ID
   */
  readonly id: string;

  /**
   * 对话模型ID
   */
  dialogueModelId: string;

  /**
   * 模型文件ID
   */
  modelJsonId: string;

  /**
   * 模型文件类型
   */
  modelJsonType: string;

  /**
   * 状态
   */
  status: string;

  /**
   * 是否焦点
   */
  ifFocus: number;

  /**
   * 代码文件Url
   */
  codeFileUrl?: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
