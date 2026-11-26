import type { DialogueDetailsEntity } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueModelDetailsAndDialogueModelInformationList/types/DialogueDetailsEntity';

/**
 * 对话实体
 */
export type DialogueEntity = {

  /**
   * 对话ID
   */
  id?: string;

  /**
   * 对话名称
   */
  dialogueName: string;

  /**
   * 对话类型
   */
  dialogueType?: string;

  /**
   * 对话账户ID
   */
  dialogueAccountId: string;

  /**
   * 对话机器人ID
   */
  dialogueRobotId?: string;

  /**
   * 对话模型
   */
  dialogModel?: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

  /**
   * 对话详情列表
   */
  dialogueDetailsList: DialogueDetailsEntity[];

}
