
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * loggedinUser 登录用户
 * memberType 会员类型
 */
export interface FlowCodeDetermineUserMembershipStatusParams {
  setter: any;
  dispatch: any;
  loggedinUser: any;
  memberType: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeDetermineUserMembershipStatusResults {
}

/**
 * 判断用户会员状态
 * FLOW_NODE_DETERMINE_USER_MEMBERSHIP_STATUS
 * 唯一id: LeftComponent/FLOW_CODE_DETERMINE_USER_MEMBERSHIP_STATUS
 */
export const flowCodeDetermineUserMembershipStatus = async (params: FlowCodeDetermineUserMembershipStatusParams): Promise<FlowCodeDetermineUserMembershipStatusResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { loggedinUser } = params;
  const { memberType } = params;
  // 结束流程
  return {}
};
