import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeAdministratorAccount } from '@/flows/com.horsecoder.platform.permission/ObtainCandidateListOfOrganizeManagementAccounts/types/OrganizeAdministratorAccount';

/**
 * 入参明细:
 * organizeId 组织ID
 */
export interface FlowObtainCandidateListOfOrganizeManagementAccountsParams {
  organizeId: string;
}

/**
 * 出参明细:
 * organizeAccountCandidateList 组织账户候选列表
 */
export interface FlowObtainCandidateListOfOrganizeManagementAccountsResults {
  organizeAccountCandidateList: OrganizeAdministratorAccount[];
}

/**
 * 获取组织管理账户候选列表
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_CANDIDATE_LIST_OF_ORGANIZE_MANAGEMENT_ACCOUNTS
 */
export const flowObtainCandidateListOfOrganizeManagementAccounts = async (params: FlowObtainCandidateListOfOrganizeManagementAccountsParams): StandardPromise<FlowObtainCandidateListOfOrganizeManagementAccountsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_CANDIDATE_LIST_OF_ORGANIZE_MANAGEMENT_ACCOUNTS',
      params: { ...params },
    },
  });
};


export const flowObtainCandidateListOfOrganizeManagementAccountsFacade = async (params: FlowObtainCandidateListOfOrganizeManagementAccountsParams): Promise<FlowObtainCandidateListOfOrganizeManagementAccountsResults> => {
  const { data: { value } } =  await flowObtainCandidateListOfOrganizeManagementAccounts(params);
  return value;
};