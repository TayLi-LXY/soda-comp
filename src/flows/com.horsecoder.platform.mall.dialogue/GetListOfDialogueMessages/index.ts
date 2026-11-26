import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { QueryFilter } from '@/flows/com.horsecoder.im/SearchImChatRecordsBasedOnId/types/QueryFilter';
import type { DialogueMessage } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/types/DialogueMessage';

/**
 * 入参明细:
 * queryFilter 查询Filter
 */
export interface FlowGetListOfDialogueMessagesParams {
  queryFilter: QueryFilter;
}

/**
 * 出参明细:
 * dialogueMessageList 对话消息列表
 */
export interface FlowGetListOfDialogueMessagesResults {
  dialogueMessageList: DialogueMessage[];
}

/**
 * 获取对话消息列表
 * @com.horsecoder.platform.mall.dialogue/FLOW_GET_LIST_OF_DIALOGUE_MESSAGES
 */
export const flowGetListOfDialogueMessages = async (params: FlowGetListOfDialogueMessagesParams): StandardPromise<FlowGetListOfDialogueMessagesResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_GET_LIST_OF_DIALOGUE_MESSAGES',
      params: { ...params },
    },
  });
};


export const flowGetListOfDialogueMessagesFacade = async (params: FlowGetListOfDialogueMessagesParams): Promise<FlowGetListOfDialogueMessagesResults> => {
  const { data: { value } } =  await flowGetListOfDialogueMessages(params);
  return value;
};