
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * entity 聊天记录列表控制单项
 * index 索引
 */
export interface FlowCodeOnObtainContentOfReplyMessageParams {
  setter: any;
  dispatch: any;
  entity: any;
  index: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnObtainContentOfReplyMessageResults {
}

/**
 * 获取回复消息内容
 * FLOW_NODE_ON_OBTAIN_CONTENT_OF_REPLY_MESSAGE
 * 唯一id: ReplyIndividualComponent/FLOW_CODE_ON_OBTAIN_CONTENT_OF_REPLY_MESSAGE
 */
export const flowCodeOnObtainContentOfReplyMessage = async (params: FlowCodeOnObtainContentOfReplyMessageParams): Promise<FlowCodeOnObtainContentOfReplyMessageResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { entity } = params;
  const { index } = params;

  let replyMessage = entity.content;
  try {
    replyMessage = JSON.parse(replyMessage);
    setter.setMessageContent(replyMessage.message);
    return {};
  } catch {}
  setter.setMessageContent(replyMessage);

  // 结束流程
  return {}
};
