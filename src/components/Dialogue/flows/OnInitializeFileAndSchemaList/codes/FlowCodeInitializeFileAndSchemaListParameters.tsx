
/**
 * 入参明细:
 * conversationId 对话ID
 */
export interface FlowCodeInitializeFileAndSchemaListParametersParams {
  conversationId: any;
}

/**
 * 出参明细:
 * imConversationId IM会话ID
 */
export interface FlowCodeInitializeFileAndSchemaListParametersResults {
  imConversationId: string;
}

/**
 * 初始化文件和schema列表参数
 * FLOW_NODE_INITIALIZE_FILE_AND_SCHEMA_LIST_PARAMETERS
 * 唯一id: Dialogue/FLOW_CODE_INITIALIZE_FILE_AND_SCHEMA_LIST_PARAMETERS
 */
export const flowCodeInitializeFileAndSchemaListParameters = async (params: FlowCodeInitializeFileAndSchemaListParametersParams): Promise<FlowCodeInitializeFileAndSchemaListParametersResults> => {
  // 初始化流程出参
  let imConversationId;
  // 开始流程
  const { conversationId } = params;

  imConversationId = conversationId;

  // 结束流程
  return {
    imConversationId,
  }
};
