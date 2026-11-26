import type { DialogueDataSchema } from '@/types/com.horsecoder.platform.mall.dialogue/sys/DialogueDataSchema';
import type { DialogueSchemaFile } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/DialogueSchemaFile';

/**
 * Schema实体
 */
export type SchemaEntity = {

  /**
   * 对话数据模式
   */
  dialogueDataSchema: DialogueDataSchema;

  /**
   * 对话数据模式模型
   */
  dataSchemaModel: any;

  /**
   * 对话模式文件列表
   */
  dialogueSchemaFileList: DialogueSchemaFile[];

}
