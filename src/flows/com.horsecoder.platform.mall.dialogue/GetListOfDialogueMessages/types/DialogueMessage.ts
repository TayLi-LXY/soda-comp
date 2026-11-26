import type { DialogueTaskModel } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueTaskModel';
import type { DialogueTaskFileModel } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueTaskFileModel';

/**
 * 对话消息
 */
export type DialogueMessage = {

  /**
   * 消息ID
   */
  id: string;

  /**
   * 会话ID
   */
  conversationId: string;

  /**
   * 时间戳
   */
  timestamp: any;

  /**
   * 消息内容
   */
  message: string;

  /**
   * 发送人ID
   */
  senderId: string;

  /**
   * 对话任务
   */
  dialogueTask: DialogueTaskModel;

  /**
   * 对话任务文件列表
   */
  dialogueTaskFileList: DialogueTaskFileModel[];

}
