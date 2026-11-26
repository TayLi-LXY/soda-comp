import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PermissionModel } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/types/PermissionModel';

/**
 * 入参明细:
 * organizeId 组织ID
 * accountId 账户ID
 */
export interface FlowObtainOrganizeAccountAssignablePermissionsParams {
  organizeId: string;
  accountId: string;
}

/**
 * 出参明细:
 * permissionListForAccountsWithinOrganize 组织内账户的权限列表
 * organizePermissionModelList 组织权限model列表
 */
export interface FlowObtainOrganizeAccountAssignablePermissionsResults {
  permissionListForAccountsWithinOrganize: PermissionModel[];
  organizePermissionModelList: PermissionModel[];
}

/**
 * 获取组织账户可分配权限
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_ORGANIZE_ACCOUNT_ASSIGNABLE_PERMISSIONS
 */
export const flowObtainOrganizeAccountAssignablePermissions = async (params: FlowObtainOrganizeAccountAssignablePermissionsParams): StandardPromise<FlowObtainOrganizeAccountAssignablePermissionsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_ORGANIZE_ACCOUNT_ASSIGNABLE_PERMISSIONS',
      params: { ...params },
    },
  });
};


export const flowObtainOrganizeAccountAssignablePermissionsFacade = async (params: FlowObtainOrganizeAccountAssignablePermissionsParams): Promise<FlowObtainOrganizeAccountAssignablePermissionsResults> => {
  const { data: { value } } =  await flowObtainOrganizeAccountAssignablePermissions(params);
  return value;
};