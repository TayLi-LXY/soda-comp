import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 * organizeId 组织ID
 */
export interface FlowObtainAccountOrganizationRolesParams {
  accountId: string;
  organizeId: string;
}

/**
 * 出参明细:
 * roleList 角色列表
 */
export interface FlowObtainAccountOrganizationRolesResults {
  roleList: any[];
}

/**
 * 获取账户组织角色
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATION_ROLES
 */
export const flowObtainAccountOrganizationRoles = async (params: FlowObtainAccountOrganizationRolesParams): StandardPromise<FlowObtainAccountOrganizationRolesResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATION_ROLES',
      params: { ...params },
    },
  });
};


export const flowObtainAccountOrganizationRolesFacade = async (params: FlowObtainAccountOrganizationRolesParams): Promise<FlowObtainAccountOrganizationRolesResults> => {
  const { data: { value } } =  await flowObtainAccountOrganizationRoles(params);
  return value;
};