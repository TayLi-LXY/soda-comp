import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PermissionModel } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/types/PermissionModel';

/**
 * 入参明细:
 * permissions 权限列表
 * targetOrganizeId 目标组织ID
 * assignPersonAccountId 分配人账户ID
 */
export interface FlowAddAndBindPermissionsToOrganizeParams {
  permissions: PermissionModel[];
  targetOrganizeId: string;
  assignPersonAccountId: string;
}

/**
 * 出参明细:
 */
export interface FlowAddAndBindPermissionsToOrganizeResults {
}

/**
 * 新增并绑定权限给组织
 * @com.horsecoder.platform.permission/FLOW_ADD_AND_BIND_PERMISSIONS_TO_ORGANIZE
 */
export const flowAddAndBindPermissionsToOrganize = async (params: FlowAddAndBindPermissionsToOrganizeParams): StandardPromise<FlowAddAndBindPermissionsToOrganizeResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_ADD_AND_BIND_PERMISSIONS_TO_ORGANIZE',
      params: { ...params },
    },
  });
};


export const flowAddAndBindPermissionsToOrganizeFacade = async (params: FlowAddAndBindPermissionsToOrganizeParams): Promise<FlowAddAndBindPermissionsToOrganizeResults> => {
  const { data: { value } } =  await flowAddAndBindPermissionsToOrganize(params);
  return value;
};