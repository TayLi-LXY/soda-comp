import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Role } from '@/types/com.horsecoder.platform.permission/sys/Role';
import type { PermissionModel } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/types/PermissionModel';

/**
 * 入参明细:
 * accountId 账户ID
 */
export interface FlowObtainListOfAccountRolePermissionsParams {
  accountId: string;
}

/**
 * 出参明细:
 * roleList 角色列表
 * permissionList 权限列表
 */
export interface FlowObtainListOfAccountRolePermissionsResults {
  roleList: Role[];
  permissionList: PermissionModel[];
}

/**
 * 获取账户角色权限列表
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_LIST_OF_ACCOUNT_ROLE_PERMISSIONS
 */
export const flowObtainListOfAccountRolePermissions = async (params: FlowObtainListOfAccountRolePermissionsParams): StandardPromise<FlowObtainListOfAccountRolePermissionsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_LIST_OF_ACCOUNT_ROLE_PERMISSIONS',
      params: { ...params },
    },
  });
};


export const flowObtainListOfAccountRolePermissionsFacade = async (params: FlowObtainListOfAccountRolePermissionsParams): Promise<FlowObtainListOfAccountRolePermissionsResults> => {
  const { data: { value } } =  await flowObtainListOfAccountRolePermissions(params);
  return value;
};