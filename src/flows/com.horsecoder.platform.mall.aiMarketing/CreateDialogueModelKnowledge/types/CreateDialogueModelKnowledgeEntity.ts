
/**
 * 创建对话模型知识实体
 */
export type CreateDialogueModelKnowledgeEntity = {

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
   * 对话模型ID
   */
  dialogueModelId: string;

  /**
   * 对话详情ID
   */
  dialogueDetailsId: string;

}
