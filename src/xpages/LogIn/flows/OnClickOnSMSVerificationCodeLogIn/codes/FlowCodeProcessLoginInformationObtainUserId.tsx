import type { UserLoginResult } from '@/flows/com.horsecoder.identity/Login/types/UserLoginResult';
import { message } from 'antd';

/**
 * 入参明细:
 * userInfo 用户信息
 */
export interface FlowCodeProcessLoginInformationObtainUserIdParams {
  userInfo: UserLoginResult;
}

/**
 * 出参明细:
 * userId 用户ID
 */
export interface FlowCodeProcessLoginInformationObtainUserIdResults {
  userId: string;
}

/**
 * 处理登录信息得到用户ID
 * FLOW_NODE_PROCESS_LOGIN_INFORMATION_OBTAIN_USER_ID
 * 唯一id: LogIn/FLOW_CODE_PROCESS_LOGIN_INFORMATION_OBTAIN_USER_ID
 */
export const flowCodeProcessLoginInformationObtainUserId = async (params: FlowCodeProcessLoginInformationObtainUserIdParams): Promise<FlowCodeProcessLoginInformationObtainUserIdResults> => {
  // 初始化流程出参
  let userId;
  // 开始流程
  const { userInfo } = params;


  if(!userInfo || !userInfo.id){
    message.error('用户信息错误');
  } else {
    userId = userInfo.id;
  }

  // 结束流程
  return {
    userId,
  }
};
