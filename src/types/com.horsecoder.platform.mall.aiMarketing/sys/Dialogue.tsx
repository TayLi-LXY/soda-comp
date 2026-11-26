import type { DialogueModel } from './DialogueModel';
import type { DialogueAttachment } from './DialogueAttachment';

/**
 * 对话
 */
export type Dialogue = {

  /**
   * 对话ID
   */
  readonly id: string;

  /**
   * 对话名称
   */
  readonly dialogueName: string;

  /**
   * 对话类型
   */
  dialogueType?: string;

  /**
   * 对话账户ID
   */
  readonly dialogueAccountId: string;

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
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

  /**
   * 对话的ID关联的对话附件列表
   */
  dialogueAttachmentList?: DialogueAttachment[];

  /**
   * 对话的ID关联的对话模型列表
   */
  dialogueModelList?: DialogueModel[];

}
