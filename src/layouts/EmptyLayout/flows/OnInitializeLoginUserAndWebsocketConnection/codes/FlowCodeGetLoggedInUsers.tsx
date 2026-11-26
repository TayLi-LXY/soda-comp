import type { LoggedinUser } from '@/flows/com.horsecoder.identity/UserLoginVerification/types/LoggedinUser';
import { forwardLogin } from '@/src/logic/forwards';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import { message } from 'antd';

/**
 * 入参明细:
 * loggedinUser 登录用户
 * loginStatus 登录状态
 */
export interface FlowCodeGetLoggedInUsersParams {
  loggedinUser: LoggedinUser;
  loginStatus: any;
}

/**
 * 出参明细:
 * user 用户
 */
export interface FlowCodeGetLoggedInUsersResults {
  user: User;
}

/**
 * 获取登录用户
 * FLOW_NODE_GET_LOGGED_IN_USERS
 * 唯一id: EmptyLayout/FLOW_CODE_GET_LOGGED_IN_USERS
 */
export const flowCodeGetLoggedInUsers = async (params: FlowCodeGetLoggedInUsersParams): Promise<FlowCodeGetLoggedInUsersResults> => {
  // 初始化流程出参
  let user;
  // 开始流程
  const { loggedinUser } = params;
  const { loginStatus } = params;

  if (!loginStatus) {
    throw new Error('用户未登录');
    message.error('用户未登录');
    forwardLogin();
  }
  user = {
    ...loggedinUser,
    name: loggedinUser.userName,
  }

  // 结束流程
  return {
    user,
  }
};
