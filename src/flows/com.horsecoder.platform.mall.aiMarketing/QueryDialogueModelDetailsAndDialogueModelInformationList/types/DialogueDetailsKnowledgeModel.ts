
/**
 * 对话详情知识模型
 */
export type DialogueDetailsKnowledgeModel = {

  /**
   * 对话模型知识ID
   */
  id?: string;

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
   * 对话详情ID
   */
  dialogueDetailsId: string;

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
