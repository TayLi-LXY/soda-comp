import type { SchemaEntity } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/types/SchemaEntity';

/**
 * 入参明细:
 * schemaEntityList Schema实体列表
 */
export interface FlowCodeConvertDialogueDataPatternsAndFilesParams {
  schemaEntityList: SchemaEntity[];
}

/**
 * 出参明细:
 * dialogueDataSchemaList 对话数据模式列表
 */
export interface FlowCodeConvertDialogueDataPatternsAndFilesResults {
  dialogueDataSchemaList: any;
}

/**
 * 转化对话数据模式和文件
 * FLOW_NODE_CONVERT_DIALOGUE_DATA_PATTERNS_AND_FILES
 * 唯一id: Dialogue/FLOW_CODE_CONVERT_DIALOGUE_DATA_PATTERNS_AND_FILES
 */
export const flowCodeConvertDialogueDataPatternsAndFiles = async (params: FlowCodeConvertDialogueDataPatternsAndFilesParams): Promise<FlowCodeConvertDialogueDataPatternsAndFilesResults> => {
  // 初始化流程出参
  let dialogueDataSchemaList;
  // 开始流程
  const { schemaEntityList } = params;

  dialogueDataSchemaList = schemaEntityList;

  // 结束流程
  return {
    dialogueDataSchemaList,
  }
};
