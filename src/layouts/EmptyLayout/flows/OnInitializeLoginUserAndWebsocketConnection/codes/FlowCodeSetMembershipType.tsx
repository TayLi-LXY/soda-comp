import { flowCreateDataSmartAccountMembershipFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/CreateDataSmartAccountMembership';
import { refreshEmptyLayoutLayoutMemberTypeState } from "@/src/models/EmptyLayout/action";

/**
 * 入参明细:
 * userId 用户ID
 * dispatch WEB状态更新
 */
export interface FlowCodeSetMembershipTypeParams {
  userId: string;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetMembershipTypeResults {
}

/**
 * 设置会员类型
 * FLOW_NODE_SET_MEMBERSHIP_TYPE
 * 唯一id: EmptyLayout/FLOW_CODE_SET_MEMBERSHIP_TYPE
 */
export const flowCodeSetMembershipType = async (params: FlowCodeSetMembershipTypeParams): Promise<FlowCodeSetMembershipTypeResults> => {
  // 初始化流程出参
  // 开始流程
  const { userId } = params;
  const { dispatch } = params;

  // 验证用户ID
  if (!userId) {
    console.log('[会员状态] 用户ID为空');
    return {};
  }


  // 获取会员信息
  try {
    const { dataSmartAccountMember } = await flowCreateDataSmartAccountMembershipFacade({
      userId: userId,
    });

    // 获取会员类型：0 = 标准, 1 = Pro
    const memberTypeText = dataSmartAccountMember?.memberType === 1 ? 'Pro' : '标准';

    // 更新 Redux 状态
    dispatch(refreshEmptyLayoutLayoutMemberTypeState(memberTypeText));

    console.log('[会员状态] 初始化完成:', memberTypeText);
  } catch (error) {
    console.error('[会员状态] 初始化失败:', error);
    // 失败时设置为默认值
    dispatch(refreshEmptyLayoutLayoutMemberTypeState('标准'));
  }

  // 结束流程
  return {}
};
