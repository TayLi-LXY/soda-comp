import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * imUserId IM发送用户ID
 * recipientIdList 接收人ID列表
 * type 对话类型
 * status 状态
 * name 名字
 */
export interface FlowCreateADialogueParams {
  imUserId: string;
  recipientIdList: string[];
  type?: number;
  status?: number;
  name: string;
}

/**
 * 出参明细:
 * imUserConversationId IM用户对话ID
 * imConversationId IM会话Id
 */
export interface FlowCreateADialogueResults {
  imUserConversationId: string;
  imConversationId: string;
}

/**
 * 创建对话
 * @com.horsecoder.platform.mall.dialogue/FLOW_CREATE_A_DIALOGUE
 */
export const flowCreateADialogue = async (params: FlowCreateADialogueParams): StandardPromise<FlowCreateADialogueResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_CREATE_A_DIALOGUE',
      params: { ...params },
    },
  });
};


export const flowCreateADialogueFacade = async (params: FlowCreateADialogueParams): Promise<FlowCreateADialogueResults> => {
  const { data: { value } } =  await flowCreateADialogue(params);
  return value;
};