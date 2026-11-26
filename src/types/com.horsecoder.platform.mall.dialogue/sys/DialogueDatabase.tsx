
/**
 * 对话数据库
 */
export type DialogueDatabase = {

  /**
   * 对话数据库ID
   */
  readonly id: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 对话数据模式ID
   */
  dialogueDataSchemaId: string;

  /**
   * 类型
   */
  type: string;

  /**
   * 文件Url
   */
  fileUrl: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
