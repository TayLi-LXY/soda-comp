import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * latestNewsRecordEntity 最新消息记录实体
 * senderNicknameDictionary 发送人昵称字典
 * conversationId 对话ID
 */
export interface FlowOnUpdateNewMessageEntityParams {
  setter: any;
  dispatch: any;
  latestNewsRecordEntity: any;
  senderNicknameDictionary: any;
  conversationId: any;
}

/**
 * 出参明细:
 */
export interface FlowOnUpdateNewMessageEntityResults {
}

/**
 * 更新新消息实体
 * @com.horsecoder.platform.mall.umi.chat/rightComponent/FLOW_ON_UPDATE_NEW_MESSAGE_ENTITY
 */
export const flowOnUpdateNewMessageEntity = async (params: FlowOnUpdateNewMessageEntityParams): Promise<FlowOnUpdateNewMessageEntityResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/rightComponent/FLOW_ON_UPDATE_NEW_MESSAGE_ENTITY', { ...params });
};
