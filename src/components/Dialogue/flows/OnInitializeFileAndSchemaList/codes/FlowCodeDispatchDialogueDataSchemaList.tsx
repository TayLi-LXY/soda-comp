import { refreshDialogueComponentDialogueDataSchemaListState } from '@/models/Dialogue/action';

/**
 * 入参明细:
 * dispatch 全局设置器
 * dialogueDataSchemaList 对话数据模式列表
 */
export interface FlowCodeDispatchDialogueDataSchemaListParams {
  dispatch: any;
  dialogueDataSchemaList: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeDispatchDialogueDataSchemaListResults {
}

/**
 * 设置数据:对话数据模式列表
 * FLOW_NODE_DISPATCH_DIALOGUE_DATA_SCHEMA_LIST
 * 唯一id: Dialogue/FLOW_CODE_DISPATCH_DIALOGUE_DATA_SCHEMA_LIST
 */
export const flowCodeDispatchDialogueDataSchemaList = async (params: FlowCodeDispatchDialogueDataSchemaListParams): Promise<FlowCodeDispatchDialogueDataSchemaListResults> => {
  // 初始化流程出参
  // 开始流程
  const { dispatch } = params;
  const { dialogueDataSchemaList } = params;
  dispatch(refreshDialogueComponentDialogueDataSchemaListState(dialogueDataSchemaList));
  // 结束流程
  return {}
};
