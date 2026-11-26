import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * senderIdList 发送人ID列表
 * senderNicknameDictionary 发送人昵称字典
 */
export interface FlowOnUpdateNicknameDictionaryBasedOnSenderIdListParams {
  setter: any;
  dispatch: any;
  senderIdList: any;
  senderNicknameDictionary: any;
}

/**
 * 出参明细:
 */
export interface FlowOnUpdateNicknameDictionaryBasedOnSenderIdListResults {
}

/**
 * 根据发送人ID列表更新昵称字典
 * @com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST
 */
export const flowOnUpdateNicknameDictionaryBasedOnSenderIdList = async (params: FlowOnUpdateNicknameDictionaryBasedOnSenderIdListParams): Promise<FlowOnUpdateNicknameDictionaryBasedOnSenderIdListResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST', { ...params });
};
