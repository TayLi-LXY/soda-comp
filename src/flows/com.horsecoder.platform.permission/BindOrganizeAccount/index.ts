import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 * organizeId 组织ID
 * assignPersonAccountId 分配人账户ID
 */
export interface FlowBindOrganizeAccountParams {
  accountId: string;
  organizeId: string;
  assignPersonAccountId: string;
}

/**
 * 出参明细:
 */
export interface FlowBindOrganizeAccountResults {
}

/**
 * 绑定组织账户
 * @com.horsecoder.platform.permission/FLOW_BIND_ORGANIZE_ACCOUNT
 */
export const flowBindOrganizeAccount = async (params: FlowBindOrganizeAccountParams): StandardPromise<FlowBindOrganizeAccountResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_BIND_ORGANIZE_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowBindOrganizeAccountFacade = async (params: FlowBindOrganizeAccountParams): Promise<FlowBindOrganizeAccountResults> => {
  const { data: { value } } =  await flowBindOrganizeAccount(params);
  return value;
};