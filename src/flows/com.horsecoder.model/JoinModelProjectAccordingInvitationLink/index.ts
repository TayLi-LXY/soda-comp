import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * modelId 模型ID
 * accountId 账户ID
 */
export interface FlowJoinModelProjectAccordingInvitationLinkParams {
  modelId: string;
  accountId: string;
}

/**
 * 出参明细:
 */
export interface FlowJoinModelProjectAccordingInvitationLinkResults {
}

/**
 * 根据邀请链接加入模型项目
 * @com.horsecoder.model/FLOW_JOIN_MODEL_PROJECT_ACCORDING_INVITATION_LINK
 */
export const flowJoinModelProjectAccordingInvitationLink = async (params: FlowJoinModelProjectAccordingInvitationLinkParams): StandardPromise<FlowJoinModelProjectAccordingInvitationLinkResults> => {
  return request('/horsecoder-model/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.model/FLOW_JOIN_MODEL_PROJECT_ACCORDING_INVITATION_LINK',
      params: { ...params },
    },
  });
};


export const flowJoinModelProjectAccordingInvitationLinkFacade = async (params: FlowJoinModelProjectAccordingInvitationLinkParams): Promise<FlowJoinModelProjectAccordingInvitationLinkResults> => {
  const { data: { value } } =  await flowJoinModelProjectAccordingInvitationLink(params);
  return value;
};