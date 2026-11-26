import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * permissionId 权限ID
 * accountId 账户ID
 * organizeId 组织ID
 * permissionSourceOrganizationId 权限来源组织ID
 */
export interface FlowAddAccountOrganizationPermissionsParams {
  permissionId: string;
  accountId: string;
  organizeId: string;
  permissionSourceOrganizationId: string;
}

/**
 * 出参明细:
 */
export interface FlowAddAccountOrganizationPermissionsResults {
}

/**
 * 新增账户组织权限
 * @com.horsecoder.platform.permission/FLOW_ADD_ACCOUNT_ORGANIZATION_PERMISSIONS
 */
export const flowAddAccountOrganizationPermissions = async (params: FlowAddAccountOrganizationPermissionsParams): StandardPromise<FlowAddAccountOrganizationPermissionsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_ADD_ACCOUNT_ORGANIZATION_PERMISSIONS',
      params: { ...params },
    },
  });
};


export const flowAddAccountOrganizationPermissionsFacade = async (params: FlowAddAccountOrganizationPermissionsParams): Promise<FlowAddAccountOrganizationPermissionsResults> => {
  const { data: { value } } =  await flowAddAccountOrganizationPermissions(params);
  return value;
};