import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * entity 聊天记录列表控制单项
 * index 索引
 */
export interface FlowOnRetrieveMessageContentParams {
  setter: any;
  dispatch: any;
  entity: any;
  index: any;
}

/**
 * 出参明细:
 */
export interface FlowOnRetrieveMessageContentResults {
}

/**
 * 获取消息内容
 * @com.horsecoder.platform.mall.umi.chat/sendASingleMessage/FLOW_ON_RETRIEVE_MESSAGE_CONTENT
 */
export const flowOnRetrieveMessageContent = async (params: FlowOnRetrieveMessageContentParams): Promise<FlowOnRetrieveMessageContentResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/sendASingleMessage/FLOW_ON_RETRIEVE_MESSAGE_CONTENT', { ...params });
};
