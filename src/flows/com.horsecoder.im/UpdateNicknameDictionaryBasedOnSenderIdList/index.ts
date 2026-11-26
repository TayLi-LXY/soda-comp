import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * senderIdList 发送人id列表
 */
export interface FlowUpdateNicknameDictionaryBasedOnSenderIdListParams {
  senderIdList?: [];
}

/**
 * 出参明细:
 * nicknameDictionaryMap 昵称字典Map
 */
export interface FlowUpdateNicknameDictionaryBasedOnSenderIdListResults {
  nicknameDictionaryMap?: any;
}

/**
 * 根据发送人ID列表更新昵称字典
 * @com.horsecoder.im/FLOW_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST
 */
export const flowUpdateNicknameDictionaryBasedOnSenderIdList = async (params: FlowUpdateNicknameDictionaryBasedOnSenderIdListParams): StandardPromise<FlowUpdateNicknameDictionaryBasedOnSenderIdListResults> => {
  return request('/app-im/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.im/FLOW_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST',
      params: { ...params },
    },
  });
};


export const flowUpdateNicknameDictionaryBasedOnSenderIdListFacade = async (params: FlowUpdateNicknameDictionaryBasedOnSenderIdListParams): Promise<FlowUpdateNicknameDictionaryBasedOnSenderIdListResults> => {
  const { data: { value } } =  await flowUpdateNicknameDictionaryBasedOnSenderIdList(params);
  return value;
};