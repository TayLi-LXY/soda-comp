import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PermissionModel } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/types/PermissionModel';

/**
 * 入参明细:
 * roleId 角色id
 */
export interface FlowObtainPermissionListBasedOnRoleIdParams {
  roleId: string;
}

/**
 * 出参明细:
 * permissionModel 权限模型
 */
export interface FlowObtainPermissionListBasedOnRoleIdResults {
  permissionModel?: PermissionModel[];
}

/**
 * 根据角色id获取权限列表
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_PERMISSION_LIST_BASED_ON_ROLE_ID
 */
export const flowObtainPermissionListBasedOnRoleId = async (params: FlowObtainPermissionListBasedOnRoleIdParams): StandardPromise<FlowObtainPermissionListBasedOnRoleIdResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_PERMISSION_LIST_BASED_ON_ROLE_ID',
      params: { ...params },
    },
  });
};


export const flowObtainPermissionListBasedOnRoleIdFacade = async (params: FlowObtainPermissionListBasedOnRoleIdParams): Promise<FlowObtainPermissionListBasedOnRoleIdResults> => {
  const { data: { value } } =  await flowObtainPermissionListBasedOnRoleId(params);
  return value;
};