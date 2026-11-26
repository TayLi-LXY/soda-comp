import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueDetails } from '@/types/com.horsecoder.platform.mall.aiMarketing/sys/DialogueDetails';

/**
 * 入参明细:
 * dialogueDetailsId 对话详情ID
 * status 状态
 */
export interface FlowUpdateStatusOfDialogueDetailsParams {
  dialogueDetailsId: string;
  status: number;
}

/**
 * 出参明细:
 * dialogueDetails 对话详情
 */
export interface FlowUpdateStatusOfDialogueDetailsResults {
  dialogueDetails: DialogueDetails;
}

/**
 * 更新对话详情状态
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_UPDATE_STATUS_OF_DIALOGUE_DETAILS
 */
export const flowUpdateStatusOfDialogueDetails = async (params: FlowUpdateStatusOfDialogueDetailsParams): StandardPromise<FlowUpdateStatusOfDialogueDetailsResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_UPDATE_STATUS_OF_DIALOGUE_DETAILS',
      params: { ...params },
    },
  });
};


export const flowUpdateStatusOfDialogueDetailsFacade = async (params: FlowUpdateStatusOfDialogueDetailsParams): Promise<FlowUpdateStatusOfDialogueDetailsResults> => {
  const { data: { value } } =  await flowUpdateStatusOfDialogueDetails(params);
  return value;
};