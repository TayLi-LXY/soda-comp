import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PermissionModel } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/types/PermissionModel';

/**
 * 入参明细:
 * accountId 账户ID
 * organizeId 组织ID
 */
export interface FlowObtainAccountOrganizationPermissionsParams {
  accountId: string;
  organizeId: string;
}

/**
 * 出参明细:
 * permissionList 权限列表
 */
export interface FlowObtainAccountOrganizationPermissionsResults {
  permissionList: PermissionModel[];
}

/**
 * 获取账户组织权限
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATION_PERMISSIONS
 */
export const flowObtainAccountOrganizationPermissions = async (params: FlowObtainAccountOrganizationPermissionsParams): StandardPromise<FlowObtainAccountOrganizationPermissionsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATION_PERMISSIONS',
      params: { ...params },
    },
  });
};


export const flowObtainAccountOrganizationPermissionsFacade = async (params: FlowObtainAccountOrganizationPermissionsParams): Promise<FlowObtainAccountOrganizationPermissionsResults> => {
  const { data: { value } } =  await flowObtainAccountOrganizationPermissions(params);
  return value;
};