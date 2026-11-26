import { forwardIndexMain } from "@/src/logic/forwards";

/**
 * 入参明细:
 * userId 用户ID
 * username 用户名
 */
export interface FlowCodeJumpAndSetUserDataParams {
  userId: string;
  username: string;
}

/**
 * 出参明细:
 * loggedinUser 登录用户
 */
export interface FlowCodeJumpAndSetUserDataResults {
  loggedinUser: any;
}

/**
 * 跳转并设置用户数据
 * FLOW_NODE_JUMP_AND_SET_USER_DATA
 * 唯一id: Scaned/FLOW_CODE_JUMP_AND_SET_USER_DATA
 */
export const flowCodeJumpAndSetUserData = async (params: FlowCodeJumpAndSetUserDataParams): Promise<FlowCodeJumpAndSetUserDataResults> => {
  // 初始化流程出参
  let loggedinUser;
  // 开始流程
  const { userId } = params;
  const { username } = params;

  loggedinUser = {
    id: userId,
    name: username,
  };
  forwardIndexMain();

  // 结束流程
  return {
    loggedinUser,
  }
};
