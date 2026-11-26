
/**
 * 对话数据模式
 */
export type DialogueDataSchema = {

  /**
   * 对话数据模式ID
   */
  readonly id: string;

  /**
   * 对话ID
   */
  dialogueId: string;

  /**
   * 模式名称
   */
  schemaName: string;

  /**
   * 模式定义文件Url
   */
  schemaUrl: string;

  /**
   * 模式定义
   */
  schemaDefinition: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
