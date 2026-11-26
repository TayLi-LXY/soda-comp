import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * password 密码
 * phone 手机号
 * nickname 昵称
 * email 邮箱
 * userName 用户名
 */
export interface FlowRegisterBusinessDesignAccountParams {
  password: string;
  phone: string;
  nickname: string;
  email: string;
  userName: string;
}

/**
 * 出参明细:
 * result 注册结果
 * userId 用户ID
 * salt 盐值
 * passwordEncrypted 加密后密码
 * token token
 */
export interface FlowRegisterBusinessDesignAccountResults {
  result: any;
  userId: string;
  salt: string;
  passwordEncrypted: string;
  token: string;
}

/**
 * 注册业务设计账户
 * @com.horsecoder.identity/FLOW_REGISTER_BUSINESS_DESIGN_ACCOUNT
 */
export const flowRegisterBusinessDesignAccount = async (params: FlowRegisterBusinessDesignAccountParams): StandardPromise<FlowRegisterBusinessDesignAccountResults> => {
  return request('/horsecoder-identity/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.identity/FLOW_REGISTER_BUSINESS_DESIGN_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowRegisterBusinessDesignAccountFacade = async (params: FlowRegisterBusinessDesignAccountParams): Promise<FlowRegisterBusinessDesignAccountResults> => {
  const { data: { value } } =  await flowRegisterBusinessDesignAccount(params);
  return value;
};