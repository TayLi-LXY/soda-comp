
/**
 * 入参明细:
 * messageContent 消息内容
 */
export interface FlowCodeInitializeResultDisplayWithInputParametersParams {
  messageContent: any;
}

/**
 * 出参明细:
 * fileUrl 文件Url
 * summaryMessage 总结消息
 */
export interface FlowCodeInitializeResultDisplayWithInputParametersResults {
  fileUrl: string;
  summaryMessage: string;
}

/**
 * 初始化结果展示入参
 * FLOW_NODE_INITIALIZE_RESULT_DISPLAY_WITH_INPUT_PARAMETERS
 * 唯一id: QueryResultDisplayComponent/FLOW_CODE_INITIALIZE_RESULT_DISPLAY_WITH_INPUT_PARAMETERS
 */
export const flowCodeInitializeResultDisplayWithInputParameters = async (params: FlowCodeInitializeResultDisplayWithInputParametersParams): Promise<FlowCodeInitializeResultDisplayWithInputParametersResults> => {
  // 初始化流程出参
  let fileUrl;
  let summaryMessage;
  // 开始流程
  const { messageContent } = params;

  let message = messageContent;
  try {
    message = JSON.parse(message);
  } catch {}
  const fileList = message.dialogueTaskFileList;
  if (fileList && fileList.length > 0) {
    fileUrl = message.dialogueTaskFileList[0].fileUrl;
  }
  summaryMessage = message.message;

  // 结束流程
  return {
    fileUrl,
    summaryMessage,
  }
};
