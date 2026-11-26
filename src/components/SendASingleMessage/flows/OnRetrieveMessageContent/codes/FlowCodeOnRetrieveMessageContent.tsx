
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * entity 聊天记录列表控制单项
 * index 索引
 */
export interface FlowCodeOnRetrieveMessageContentParams {
  setter: any;
  dispatch: any;
  entity: any;
  index: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnRetrieveMessageContentResults {
}

/**
 * 获取消息内容
 * FLOW_NODE_ON_RETRIEVE_MESSAGE_CONTENT
 * 唯一id: SendASingleMessage/FLOW_CODE_ON_RETRIEVE_MESSAGE_CONTENT
 */
export const flowCodeOnRetrieveMessageContent = async (params: FlowCodeOnRetrieveMessageContentParams): Promise<FlowCodeOnRetrieveMessageContentResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { entity } = params;
  const { index } = params;

  let myMessage = entity.content;
  try {
    myMessage = JSON.parse(myMessage);
    setter.setMessageContent(myMessage.message);
    return {};
  } catch {}
  setter.setMessageContent(myMessage);

  // 结束流程
  return {}
};
