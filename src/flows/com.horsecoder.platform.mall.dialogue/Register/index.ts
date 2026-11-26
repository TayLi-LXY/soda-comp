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
export interface FlowRegisterParams {
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
 * userName 用户名
 */
export interface FlowRegisterResults {
  userId: string;
  userName: string;
}

/**
 * 注册
 * @com.horsecoder.platform.mall.dialogue/FLOW_REGISTER
 */
export const flowRegister = async (params: FlowRegisterParams): StandardPromise<FlowRegisterResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_REGISTER',
      params: { ...params },
    },
  });
};


export const flowRegisterFacade = async (params: FlowRegisterParams): Promise<FlowRegisterResults> => {
  const { data: { value } } =  await flowRegister(params);
  return value;
};