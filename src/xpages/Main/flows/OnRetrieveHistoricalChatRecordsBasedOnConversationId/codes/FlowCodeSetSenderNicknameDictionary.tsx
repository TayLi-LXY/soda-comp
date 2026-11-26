
import { refreshDialogueComponentSenderNicknameDictionaryState } from '@/models/Dialogue/action';

/**
 * 入参明细:
 * nicknameDictionaryMap 昵称字典Map
 * senderNicknameDictionary 发送人昵称字典
 * dispatch WEB状态更新
 */
export interface FlowCodeSetSenderNicknameDictionaryParams {
  nicknameDictionaryMap?: any;
  senderNicknameDictionary: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export type FlowCodeSetSenderNicknameDictionaryResults = Record<string, never>;

/**
 * 设置发送人昵称字典
 * FLOW_NODE_SET_SENDER_NICKNAME_DICTIONARY
 * 唯一id: Main/FLOW_CODE_SET_SENDER_NICKNAME_DICTIONARY
 */
export const flowCodeSetSenderNicknameDictionary = async (params: FlowCodeSetSenderNicknameDictionaryParams): Promise<FlowCodeSetSenderNicknameDictionaryResults> => {
  // 初始化流程出参
  // 开始流程
  const { nicknameDictionaryMap } = params;
  const { senderNicknameDictionary } = params;
  const { dispatch } = params;

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
