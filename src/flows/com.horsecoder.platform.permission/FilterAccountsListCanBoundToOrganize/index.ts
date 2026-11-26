import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AccountEntity } from '@/flows/com.horsecoder.platform.permission/FilterAccountsListCanBoundToOrganize/types/AccountEntity';

/**
 * 入参明细:
 * targetOrganizeId 目标组织ID
 */
export interface FlowFilterAccountsListCanBoundToOrganizeParams {
  targetOrganizeId: string;
}

/**
 * 出参明细:
 * accountEntityList 账户实体列表
 */
export interface FlowFilterAccountsListCanBoundToOrganizeResults {
  accountEntityList: AccountEntity[];
}

/**
 * 筛选可绑定到指定组织的账户列表
 * @com.horsecoder.platform.permission/FLOW_FILTER_ACCOUNTS_LIST_CAN_BOUND_TO_ORGANIZE
 */
export const flowFilterAccountsListCanBoundToOrganize = async (params: FlowFilterAccountsListCanBoundToOrganizeParams): StandardPromise<FlowFilterAccountsListCanBoundToOrganizeResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_FILTER_ACCOUNTS_LIST_CAN_BOUND_TO_ORGANIZE',
      params: { ...params },
    },
  });
};


export const flowFilterAccountsListCanBoundToOrganizeFacade = async (params: FlowFilterAccountsListCanBoundToOrganizeParams): Promise<FlowFilterAccountsListCanBoundToOrganizeResults> => {
  const { data: { value } } =  await flowFilterAccountsListCanBoundToOrganize(params);
  return value;
};