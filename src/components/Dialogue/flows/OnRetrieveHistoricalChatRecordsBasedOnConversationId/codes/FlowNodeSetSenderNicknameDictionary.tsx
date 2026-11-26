
import { refreshDialogueComponentSenderNicknameDictionaryState } from '@/src/models/Dialogue/action';

/**
 * 入参明细:
 * nicknameDictionaryMap 昵称字典Map
 * dispatch WEB状态更新
 * senderNicknameDictionary 发送人昵称字典
 */
export interface FlowNodeSetSenderNicknameDictionaryParams {
  nicknameDictionaryMap?: any;
  dispatch: any;
  senderNicknameDictionary: any;
}

/**
 * 出参明细:
 */
export interface FlowNodeSetSenderNicknameDictionaryResults {
}

/**
 * 设置发送人昵称字典
 * FLOW_NODE_SET_SENDER_NICKNAME_DICTIONARY
 * 唯一id: Dialogue/FLOW_NODE_SET_SENDER_NICKNAME_DICTIONARY
 */
export const flowNodeSetSenderNicknameDictionary = async (params: FlowNodeSetSenderNicknameDictionaryParams): Promise<FlowNodeSetSenderNicknameDictionaryResults> => {
  // 初始化流程出参
  // 开始流程
  const { nicknameDictionaryMap } = params;
  const { dispatch } = params;
  const { senderNicknameDictionary } = params;

  // 如果nicknameDictionaryMap为空，直接使用原字典
  if (!nicknameDictionaryMap || Object.keys(nicknameDictionaryMap).length === 0) {
    return {};
  }

  const nextSenderNicknameDictionary = { ...(senderNicknameDictionary ?? {}) };
  let hasChanged = false;

  // 只添加senderNicknameDictionary中不存在的键值对，或者有更新
  Object.keys(nicknameDictionaryMap).forEach(key => {
    if (nextSenderNicknameDictionary[key] !== nicknameDictionaryMap[key]) {
      nextSenderNicknameDictionary[key] = nicknameDictionaryMap[key];
      hasChanged = true;
    }
  });

  if (hasChanged) {
    dispatch(refreshDialogueComponentSenderNicknameDictionaryState(nextSenderNicknameDictionary));
  }

  // 结束流程
  return {}
};
