import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户Id
 * organizeId 组织Id
 */
export interface FlowCreateOrganizeAccountParams {
  accountId?: string;
  organizeId?: string;
}

/**
 * 出参明细:
 */
export interface FlowCreateOrganizeAccountResults {
}

/**
 * 创建组织账户
 * @com.horsecoder.platform.permission/FLOW_CREATE_ORGANIZE_ACCOUNT
 */
export const flowCreateOrganizeAccount = async (params: FlowCreateOrganizeAccountParams): StandardPromise<FlowCreateOrganizeAccountResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_CREATE_ORGANIZE_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowCreateOrganizeAccountFacade = async (params: FlowCreateOrganizeAccountParams): Promise<FlowCreateOrganizeAccountResults> => {
  const { data: { value } } =  await flowCreateOrganizeAccount(params);
  return value;
};