import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AccountEntity } from '@/flows/com.horsecoder.platform.permission/FilterAccountsListCanBoundToOrganize/types/AccountEntity';

/**
 * 入参明细:
 * page page
 * rows rows
 */
export interface FlowListOfUnboundOrganizeAccountsParams {
  page: number;
  rows: number;
}

/**
 * 出参明细:
 * accountEntityList 组织账户实体列表
 * totalNumberOfUnboundAccountLists 未绑定账户列表总数
 */
export interface FlowListOfUnboundOrganizeAccountsResults {
  accountEntityList: AccountEntity[];
  totalNumberOfUnboundAccountLists: number;
}

/**
 * 未绑定组织的账户列表
 * @com.horsecoder.platform.permission/FLOW_LIST_OF_UNBOUND_ORGANIZE_ACCOUNTS
 */
export const flowListOfUnboundOrganizeAccounts = async (params: FlowListOfUnboundOrganizeAccountsParams): StandardPromise<FlowListOfUnboundOrganizeAccountsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_LIST_OF_UNBOUND_ORGANIZE_ACCOUNTS',
      params: { ...params },
    },
  });
};


export const flowListOfUnboundOrganizeAccountsFacade = async (params: FlowListOfUnboundOrganizeAccountsParams): Promise<FlowListOfUnboundOrganizeAccountsResults> => {
  const { data: { value } } =  await flowListOfUnboundOrganizeAccounts(params);
  return value;
};