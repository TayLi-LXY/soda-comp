import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AccountTO } from '@/flows/com.horsecoder.platform.permission/AddOrGetAccount/types/AccountTO';

/**
 * 入参明细:
 * accountId 账户Id
 * title 账户标题
 */
export interface FlowAddOrGetAccountParams {
  accountId: string;
  title: string;
}

/**
 * 出参明细:
 * account 账户
 */
export interface FlowAddOrGetAccountResults {
  account: AccountTO;
}

/**
 * 新增或获取账户
 * @com.horsecoder.platform.permission/FLOW_ADD_OR_GET_ACCOUNT
 */
export const flowAddOrGetAccount = async (params: FlowAddOrGetAccountParams): StandardPromise<FlowAddOrGetAccountResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_ADD_OR_GET_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowAddOrGetAccountFacade = async (params: FlowAddOrGetAccountParams): Promise<FlowAddOrGetAccountResults> => {
  const { data: { value } } =  await flowAddOrGetAccount(params);
  return value;
};