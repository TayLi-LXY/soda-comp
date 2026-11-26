import type { DialogueDetailsKnowledgeModel } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueModelDetailsAndDialogueModelInformationList/types/DialogueDetailsKnowledgeModel';
import type { DialogueDetailsModelDesignProcessModel } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueModelDetailsAndDialogueModelInformationList/types/DialogueDetailsModelDesignProcessModel';

/**
 * 对话详情实体
 */
export type DialogueDetailsEntity = {

  /**
   * 对话详情知识列表
   */
  dialogueDetailsKnowledgeList: DialogueDetailsKnowledgeModel[];

  /**
   * 对话详情模型设计过程列表
   */
  dialogueDetailsModelDesignProcessList: DialogueDetailsModelDesignProcessModel[];

  /**
   * 对话详情ID
   */
  id?: string;

  /**
   * 对话ID
   */
  dialogueId: string;

  /**
   * 发送消息
   */
  sendMessage: string;

  /**
   * 回复信息
   */
  replyMessage: string;

  /**
   * 类型
   */
  type?: string;

  /**
   * 对话语音url
   */
  dialogueVoiceUrl: string;

  /**
   * 状态
   */
  status: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
