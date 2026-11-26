import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 */
export interface FlowOnInitializeMembershipStatusParams {
  dispatch: any;
  loggedinUser: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeMembershipStatusResults {
}

/**
 * 初始化会员状态
 * @com.horsecoder.platform.mall.umi.chat/emptyLayout/FLOW_ON_INITIALIZE_MEMBERSHIP_STATUS
 */
export const flowOnInitializeMembershipStatus = async (params: FlowOnInitializeMembershipStatusParams): Promise<FlowOnInitializeMembershipStatusResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/emptyLayout/FLOW_ON_INITIALIZE_MEMBERSHIP_STATUS', { ...params });
};
