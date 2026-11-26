import type { UserLoginResult } from '@/flows/com.horsecoder.identity/Login/types/UserLoginResult';

/**
 * 入参明细:
 * userInfo 用户信息
 */
export interface FlowCodeReturnInformationAfterProcessingLoginParams {
  userInfo: UserLoginResult;
}

/**
 * 出参明细:
 * userId 用户ID
 */
export interface FlowCodeReturnInformationAfterProcessingLoginResults {
  userId: string;
}

/**
 * 处理登陆后返回信息
 * FLOW_NODE_RETURN_INFORMATION_AFTER_PROCESSING_LOGIN
 * 唯一id: LogIn/FLOW_CODE_RETURN_INFORMATION_AFTER_PROCESSING_LOGIN
 */
export const flowCodeReturnInformationAfterProcessingLogin = async (params: FlowCodeReturnInformationAfterProcessingLoginParams): Promise<FlowCodeReturnInformationAfterProcessingLoginResults> => {
  // 初始化流程出参
  let userId;
  // 开始流程
  const { userInfo } = params;

  // 判断 userInfo 是否存在，并提取 userId
  if (userInfo && userInfo.id) {
    userId = userInfo.id;
  } else {
    throw new Error('用户信息不存在');
  }

  // 结束流程
  return {
    userId,
  }
};
