import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CreateInvitationCodeEntity } from '@/flows/com.horsecoder.platform.mall.aiMarketing/VerifyreAlreadyAnInvitationLink/types/CreateInvitationCodeEntity';

/**
 * 入参明细:
 * createInvitationCodeEntity 创建邀请码实体
 */
export interface FlowVerifyreAlreadyAnInvitationLinkParams {
  createInvitationCodeEntity: CreateInvitationCodeEntity;
}

/**
 * 出参明细:
 * invitationLink 邀请链接
 */
export interface FlowVerifyreAlreadyAnInvitationLinkResults {
  invitationLink?: string;
}

/**
 * 校验是否已有邀请链接
 * @com.horsecoder.platform.mall.aiMarketing/FLOW_VERIFYRE_ALREADY_AN_INVITATION_LINK
 */
export const flowVerifyreAlreadyAnInvitationLink = async (params: FlowVerifyreAlreadyAnInvitationLinkParams): StandardPromise<FlowVerifyreAlreadyAnInvitationLinkResults> => {
  return request('/mall-aiMarketing/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.aiMarketing/FLOW_VERIFYRE_ALREADY_AN_INVITATION_LINK',
      params: { ...params },
    },
  });
};


export const flowVerifyreAlreadyAnInvitationLinkFacade = async (params: FlowVerifyreAlreadyAnInvitationLinkParams): Promise<FlowVerifyreAlreadyAnInvitationLinkResults> => {
  const { data: { value } } =  await flowVerifyreAlreadyAnInvitationLink(params);
  return value;
};