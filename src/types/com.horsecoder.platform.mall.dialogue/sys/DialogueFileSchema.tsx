
/**
 * 对话文件模式
 */
export type DialogueFileSchema = {

  /**
   * 对话文件模式ID
   */
  readonly id: string;

  /**
   * 对话文件ID
   */
  dialogueFileId: string;

  /**
   * 对话模式ID
   */
  dialogueSchemaId: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
