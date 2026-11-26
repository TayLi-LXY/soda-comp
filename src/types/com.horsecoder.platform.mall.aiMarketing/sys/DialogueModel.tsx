import type { DialogueModelKnowledge } from './DialogueModelKnowledge';

/**
 * 对话模型
 */
export type DialogueModel = {

  /**
   * 对话模型ID
   */
  readonly id: string;

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
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

  /**
   * 对话模型的ID关联的对话模型知识列表
   */
  dialogueModelKnowledgeList?: DialogueModelKnowledge[];

}
