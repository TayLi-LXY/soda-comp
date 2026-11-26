import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DialogueEntity } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueModelDetailsAndDialogueModelInformationList/types/DialogueEntity';

/**
 * 入参明细:
 * dialogueId 对话ID
 */
export interface FlowQueryDialogueModelDetailsAndDialogueModelInformationListParams {
  dialogueId: string;
}

/**
 * 出参明细:
 * dialogueEntity 对话实体
 */
export interface FlowQueryDialogueModelDetailsAndDialogueModelInformationListResults {
  dialogueEntity: DialogueEntity;
}

/**
 * 查询对话模型详情及对话模型信息列表
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_MODEL_DETAILS_AND_DIALOGUE_MODEL_INFORMATION_LIST
 */
export const flowQueryDialogueModelDetailsAndDialogueModelInformationList = async (params: FlowQueryDialogueModelDetailsAndDialogueModelInformationListParams): StandardPromise<FlowQueryDialogueModelDetailsAndDialogueModelInformationListResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_MODEL_DETAILS_AND_DIALOGUE_MODEL_INFORMATION_LIST',
      params: { ...params },
    },
  });
};


export const flowQueryDialogueModelDetailsAndDialogueModelInformationListFacade = async (params: FlowQueryDialogueModelDetailsAndDialogueModelInformationListParams): Promise<FlowQueryDialogueModelDetailsAndDialogueModelInformationListResults> => {
  const { data: { value } } =  await flowQueryDialogueModelDetailsAndDialogueModelInformationList(params);
  return value;
};