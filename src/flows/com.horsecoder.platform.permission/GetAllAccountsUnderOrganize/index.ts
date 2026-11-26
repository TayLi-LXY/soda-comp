import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeFiltering } from '@/flows/com.horsecoder.platform.permission/GetOrganizeViewAndOrganizeListByDepth/types/OrganizeFiltering';
import type { AccountUnderOrganize } from '@/flows/com.horsecoder.platform.permission/GetAllAccountsUnderOrganize/types/AccountUnderOrganize';

/**
 * 入参明细:
 * targetOrganizeId 目标组织ID
 * superiorDepth 上级深度
 * lowerDepth 下级深度
 * organizeFilterMapper 组织筛选实体
 */
export interface FlowGetAllAccountsUnderOrganizeParams {
  targetOrganizeId: string;
  superiorDepth?: number;
  lowerDepth?: number;
  organizeFilterMapper?: OrganizeFiltering;
}

/**
 * 出参明细:
 * accountUnderOrganizeList 组织下账户列表
 */
export interface FlowGetAllAccountsUnderOrganizeResults {
  accountUnderOrganizeList: AccountUnderOrganize[];
}

/**
 * 获取组织下所有账户
 * @com.horsecoder.platform.permission/FLOW_GET_ALL_ACCOUNTS_UNDER_ORGANIZE
 */
export const flowGetAllAccountsUnderOrganize = async (params: FlowGetAllAccountsUnderOrganizeParams): StandardPromise<FlowGetAllAccountsUnderOrganizeResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_GET_ALL_ACCOUNTS_UNDER_ORGANIZE',
      params: { ...params },
    },
  });
};


export const flowGetAllAccountsUnderOrganizeFacade = async (params: FlowGetAllAccountsUnderOrganizeParams): Promise<FlowGetAllAccountsUnderOrganizeResults> => {
  const { data: { value } } =  await flowGetAllAccountsUnderOrganize(params);
  return value;
};