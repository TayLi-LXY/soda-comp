import { message } from "antd";
import { debug } from "console";

/**
 * 入参明细:
 * loggedinUser 登录用户
 * dispatch WEB状态更新
 */
export interface FlowCodeOnInitializeMembershipStatusParams {
  loggedinUser: any;
  dispatch: any;
}

/**
 * 出参明细:
 * userId 用户ID
 */
export interface FlowCodeOnInitializeMembershipStatusResults {
  userId: string;
}

/**
 * 初始化会员状态
 * FLOW_NODE_ON_INITIALIZE_MEMBERSHIP_STATUS
 * 唯一id: EmptyLayout/FLOW_CODE_ON_INITIALIZE_MEMBERSHIP_STATUS
 */
export const flowCodeOnInitializeMembershipStatus = async (params: FlowCodeOnInitializeMembershipStatusParams): Promise<FlowCodeOnInitializeMembershipStatusResults> => {
  // 初始化流程出参
  let userId;
  // 开始流程
  const { loggedinUser } = params;
  const { dispatch } = params;

  if (!loggedinUser || !loggedinUser.id) {
    // message.error('登录用户不存在');
  } else {
    userId = loggedinUser.id;
  }
 
  
  // 结束流程
  return {
    userId,
  }
};
