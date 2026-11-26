import type { DialogueFileSchema } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueFileSchema';
import type { DialogueFile } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueFile';

/**
 * 对话模式文件
 */
export type DialogueSchemaFile = {

  /**
   * 对话文件模式
   */
  dialogueFileSchema: DialogueFileSchema;

  /**
   * 对话文件
   */
  dialogueFile: DialogueFile;

}
