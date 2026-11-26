
/**
 * 对话模型知识
 */
export type DialogueModelKnowledge = {

  /**
   * 对话模型知识ID
   */
  readonly id: string;

  /**
   * 知识类型
   */
  knowledgeType: string;

  /**
   * 知识Url
   */
  knowledgeUrl: string;

  /**
   * 知识名称
   */
  knowledgeName: string;

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
