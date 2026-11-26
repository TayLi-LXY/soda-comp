import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * roleId 角色Id
 * permissionId 权限Id
 * type 添加/删除
 * accountId 账户ID
 * organizeId 组织ID
 */
export interface FlowAddRolePermissionsParams {
  roleId: string;
  permissionId: string;
  type: string;
  accountId: string;
  organizeId: string;
}

/**
 * 出参明细:
 */
export interface FlowAddRolePermissionsResults {
}

/**
 * 添加角色权限
 * @com.horsecoder.platform.permission/FLOW_ADD_ROLE_PERMISSIONS
 */
export const flowAddRolePermissions = async (params: FlowAddRolePermissionsParams): StandardPromise<FlowAddRolePermissionsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_ADD_ROLE_PERMISSIONS',
      params: { ...params },
    },
  });
};


export const flowAddRolePermissionsFacade = async (params: FlowAddRolePermissionsParams): Promise<FlowAddRolePermissionsResults> => {
  const { data: { value } } =  await flowAddRolePermissions(params);
  return value;
};