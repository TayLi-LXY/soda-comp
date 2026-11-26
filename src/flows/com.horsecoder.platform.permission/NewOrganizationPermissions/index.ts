import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PermissionModel } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/types/PermissionModel';

/**
 * 入参明细:
 * targetOrganizeId 目标组织ID
 * adminOrganizeAccountId 管理员组织账户ID
 * permissions 权限列表
 * organizeName 组织名称
 */
export interface FlowNewOrganizationPermissionsParams {
  targetOrganizeId: string;
  adminOrganizeAccountId: string;
  permissions: PermissionModel[];
  organizeName: string;
}

/**
 * 出参明细:
 */
export interface FlowNewOrganizationPermissionsResults {
}

/**
 * 新建组织权限
 * @com.horsecoder.platform.permission/FLOW_NEW_ORGANIZATION_PERMISSIONS
 */
export const flowNewOrganizationPermissions = async (params: FlowNewOrganizationPermissionsParams): StandardPromise<FlowNewOrganizationPermissionsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_NEW_ORGANIZATION_PERMISSIONS',
      params: { ...params },
    },
  });
};


export const flowNewOrganizationPermissionsFacade = async (params: FlowNewOrganizationPermissionsParams): Promise<FlowNewOrganizationPermissionsResults> => {
  const { data: { value } } =  await flowNewOrganizationPermissions(params);
  return value;
};