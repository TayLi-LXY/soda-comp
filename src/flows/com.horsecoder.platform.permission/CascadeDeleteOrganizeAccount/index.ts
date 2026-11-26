import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * organizeAccountId 组织账户ID
 * accountId 账户ID
 * organizeId 组织ID
 */
export interface FlowCascadeDeleteOrganizeAccountParams {
  organizeAccountId: string;
  accountId: string;
  organizeId: string;
}

/**
 * 出参明细:
 */
export interface FlowCascadeDeleteOrganizeAccountResults {
}

/**
 * 级联删除组织账户
 * @com.horsecoder.platform.permission/FLOW_CASCADE_DELETE_ORGANIZE_ACCOUNT
 */
export const flowCascadeDeleteOrganizeAccount = async (params: FlowCascadeDeleteOrganizeAccountParams): StandardPromise<FlowCascadeDeleteOrganizeAccountResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_CASCADE_DELETE_ORGANIZE_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowCascadeDeleteOrganizeAccountFacade = async (params: FlowCascadeDeleteOrganizeAccountParams): Promise<FlowCascadeDeleteOrganizeAccountResults> => {
  const { data: { value } } =  await flowCascadeDeleteOrganizeAccount(params);
  return value;
};