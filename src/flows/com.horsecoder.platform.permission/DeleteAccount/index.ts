import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * targetAccountId 目标账户ID
 * accountId 账户ID
 * organizeId 组织ID
 */
export interface FlowDeleteAccountParams {
  targetAccountId: string;
  accountId: string;
  organizeId: string;
}

/**
 * 出参明细:
 */
export interface FlowDeleteAccountResults {
}

/**
 * 删除账户
 * @com.horsecoder.platform.permission/FLOW_DELETE_ACCOUNT
 */
export const flowDeleteAccount = async (params: FlowDeleteAccountParams): StandardPromise<FlowDeleteAccountResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_DELETE_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowDeleteAccountFacade = async (params: FlowDeleteAccountParams): Promise<FlowDeleteAccountResults> => {
  const { data: { value } } =  await flowDeleteAccount(params);
  return value;
};