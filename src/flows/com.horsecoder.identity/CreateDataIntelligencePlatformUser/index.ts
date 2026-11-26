import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * password 密码
 * phone 手机号
 * nickname 昵称
 * email 邮箱
 * userName 用户名
 * userType 用户类型
 * captcha 验证码
 */
export interface FlowCreateDataIntelligencePlatformUserParams {
  password: string;
  phone: string;
  nickname: string;
  email: string;
  userName: string;
  userType?: number;
  captcha: string;
}

/**
 * 出参明细:
 * userId 用户ID
 */
export interface FlowCreateDataIntelligencePlatformUserResults {
  userId: string;
}

/**
 * 创建数据智能平台用户
 * @com.horsecoder.identity/FLOW_CREATE_DATA_INTELLIGENCE_PLATFORM_USER
 */
export const flowCreateDataIntelligencePlatformUser = async (params: FlowCreateDataIntelligencePlatformUserParams): StandardPromise<FlowCreateDataIntelligencePlatformUserResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_CREATE_DATA_INTELLIGENCE_PLATFORM_USER',
      params: { ...params },
    },
  });
};


export const flowCreateDataIntelligencePlatformUserFacade = async (params: FlowCreateDataIntelligencePlatformUserParams): Promise<FlowCreateDataIntelligencePlatformUserResults> => {
  const { data: { value } } =  await flowCreateDataIntelligencePlatformUser(params);
  return value;
};