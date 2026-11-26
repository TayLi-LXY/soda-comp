import type { DialogueDetailAttachment } from './DialogueDetailAttachment';
import type { DialogueDetailsModelDesignProcess } from './DialogueDetailsModelDesignProcess';
import type { DialogueDetailsKnowledge } from './DialogueDetailsKnowledge';

/**
 * 对话详情
 */
export type DialogueDetails = {

  /**
   * 对话详情ID
   */
  readonly id: string;

  /**
   * 对话ID
   */
  readonly dialogueId: string;

  /**
   * 发送消息
   */
  readonly sendMessage: string;

  /**
   * 回复信息
   */
  readonly replyMessage?: string;

  /**
   * 类型
   */
  readonly type?: string;

  /**
   * 对话语音url
   */
  readonly dialogueVoiceUrl?: string;

  /**
   * 状态
   */
  status: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

  /**
   * 对话详情的ID关联的对话详情附件列表
   */
  dialogueDetailAttachmentList?: DialogueDetailAttachment[];

  /**
   * 对话详情的ID关联的对话详情模型设计过程列表
   */
  dialogueDetailsModelDesignProcessList?: DialogueDetailsModelDesignProcess[];

  /**
   * 对话详情的ID关联的对话详情知识列表
   */
  dialogueDetailsKnowledgeList?: DialogueDetailsKnowledge[];

}
