import type { DataSmartAccountMember } from '@/flows/com.horsecoder.platform.mall.dialogue/CreateDataSmartAccountMembership/types/DataSmartAccountMember';
import { refreshEmptyLayoutLayoutMemberTypeState } from '@/src/models/EmptyLayout/action';

/**
 * 入参明细:
 * dataSmartAccountMember 数据智能账户
 * dispatch WEB状态更新
 */
export interface FlowCodeSetMembershipTypeDataParams {
  dataSmartAccountMember?: DataSmartAccountMember;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetMembershipTypeDataResults {
}

/**
 * 设置会员类型数据
 * FLOW_NODE_SET_MEMBERSHIP_TYPE_DATA
 * 唯一id: EmptyLayout/FLOW_CODE_SET_MEMBERSHIP_TYPE_DATA
 */
export const flowCodeSetMembershipTypeData = async (params: FlowCodeSetMembershipTypeDataParams): Promise<FlowCodeSetMembershipTypeDataResults> => {
  // 初始化流程出参
  // 开始流程
  const { dataSmartAccountMember } = params;
  const { dispatch } = params;
  let membershipType = '';

  if (!dataSmartAccountMember || !dataSmartAccountMember.memberType) {
    membershipType = '标准';
  } else {
    membershipType = dataSmartAccountMember?.memberType === 1 ? 'Pro' : '标准';
  }

  dispatch(refreshEmptyLayoutLayoutMemberTypeState(membershipType));


  // 结束流程
  return {}
};
