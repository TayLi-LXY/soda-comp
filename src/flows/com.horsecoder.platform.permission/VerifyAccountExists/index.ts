import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 */
export interface FlowVerifyAccountExistsParams {
  accountId: string;
}

/**
 * 出参明细:
 * account 账户
 */
export interface FlowVerifyAccountExistsResults {
  account?: any;
}

/**
 * 校验账户是否存在
 * @com.horsecoder.platform.permission/FLOW_VERIFY_ACCOUNT_EXISTS
 */
export const flowVerifyAccountExists = async (params: FlowVerifyAccountExistsParams): StandardPromise<FlowVerifyAccountExistsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_VERIFY_ACCOUNT_EXISTS',
      params: { ...params },
    },
  });
};


export const flowVerifyAccountExistsFacade = async (params: FlowVerifyAccountExistsParams): Promise<FlowVerifyAccountExistsResults> => {
  const { data: { value } } =  await flowVerifyAccountExists(params);
  return value;
};