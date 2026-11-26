import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueModelEntity } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueModelListBasedOnUserId/types/DialogueModelEntity';

/**
 * 入参明细:
 * userId 用户ID
 */
export interface FlowQueryDialogueModelListBasedOnUserIdParams {
  userId: string;
}

/**
 * 出参明细:
 * dialogueModelEntity 对话模型实体
 */
export interface FlowQueryDialogueModelListBasedOnUserIdResults {
  dialogueModelEntity?: DialogueModelEntity[];
}

/**
 * 根据用户ID查询对话模型列表
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_MODEL_LIST_BASED_ON_USER_ID
 */
export const flowQueryDialogueModelListBasedOnUserId = async (params: FlowQueryDialogueModelListBasedOnUserIdParams): StandardPromise<FlowQueryDialogueModelListBasedOnUserIdResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_MODEL_LIST_BASED_ON_USER_ID',
      params: { ...params },
    },
  });
};


export const flowQueryDialogueModelListBasedOnUserIdFacade = async (params: FlowQueryDialogueModelListBasedOnUserIdParams): Promise<FlowQueryDialogueModelListBasedOnUserIdResults> => {
  const { data: { value } } =  await flowQueryDialogueModelListBasedOnUserId(params);
  return value;
};