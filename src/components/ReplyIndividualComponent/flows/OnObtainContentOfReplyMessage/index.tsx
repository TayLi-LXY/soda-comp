import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * entity 聊天记录列表控制单项
 * index 索引
 */
export interface FlowOnObtainContentOfReplyMessageParams {
  setter: any;
  dispatch: any;
  entity: any;
  index: any;
}

/**
 * 出参明细:
 */
export interface FlowOnObtainContentOfReplyMessageResults {
}

/**
 * 获取回复消息内容
 * @com.horsecoder.platform.mall.umi.chat/replyIndividualComponent/FLOW_ON_OBTAIN_CONTENT_OF_REPLY_MESSAGE
 */
export const flowOnObtainContentOfReplyMessage = async (params: FlowOnObtainContentOfReplyMessageParams): Promise<FlowOnObtainContentOfReplyMessageResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/replyIndividualComponent/FLOW_ON_OBTAIN_CONTENT_OF_REPLY_MESSAGE', { ...params });
};
