import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { DataSmartAccountMember } from '@/flows/com.horsecoder.platform.mall.dialogue/CreateDataSmartAccountMembership/types/DataSmartAccountMember';

/**
 * 入参明细:
 * userId 用户ID
 */
export interface FlowCreateDataSmartAccountMembershipParams {
  userId: string;
}

/**
 * 出参明细:
 * dataSmartAccountMember 数据智能账户
 */
export interface FlowCreateDataSmartAccountMembershipResults {
  dataSmartAccountMember?: DataSmartAccountMember;
}

/**
 * 创建数据智能账户会员
 * @com.horsecoder.platform.mall.dialogue/FLOW_CREATE_DATA_SMART_ACCOUNT_MEMBERSHIP
 */
export const flowCreateDataSmartAccountMembership = async (params: FlowCreateDataSmartAccountMembershipParams): StandardPromise<FlowCreateDataSmartAccountMembershipResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_CREATE_DATA_SMART_ACCOUNT_MEMBERSHIP',
      params: { ...params },
    },
  });
};


export const flowCreateDataSmartAccountMembershipFacade = async (params: FlowCreateDataSmartAccountMembershipParams): Promise<FlowCreateDataSmartAccountMembershipResults> => {
  const { data: { value } } =  await flowCreateDataSmartAccountMembership(params);
  return value;
};