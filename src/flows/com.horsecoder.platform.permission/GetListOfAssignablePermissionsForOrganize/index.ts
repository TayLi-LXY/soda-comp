import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PermissionModel } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/types/PermissionModel';

/**
 * 入参明细:
 * organizeId 组织ID
 */
export interface FlowGetListOfAssignablePermissionsForOrganizeParams {
  organizeId: string;
}

/**
 * 出参明细:
 * permissionList 权限列表
 */
export interface FlowGetListOfAssignablePermissionsForOrganizeResults {
  permissionList: PermissionModel[];
}

/**
 * 获取组织可分配权限列表
 * @com.horsecoder.platform.permission/FLOW_GET_LIST_OF_ASSIGNABLE_PERMISSIONS_FOR_ORGANIZE
 */
export const flowGetListOfAssignablePermissionsForOrganize = async (params: FlowGetListOfAssignablePermissionsForOrganizeParams): StandardPromise<FlowGetListOfAssignablePermissionsForOrganizeResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_GET_LIST_OF_ASSIGNABLE_PERMISSIONS_FOR_ORGANIZE',
      params: { ...params },
    },
  });
};


export const flowGetListOfAssignablePermissionsForOrganizeFacade = async (params: FlowGetListOfAssignablePermissionsForOrganizeParams): Promise<FlowGetListOfAssignablePermissionsForOrganizeResults> => {
  const { data: { value } } =  await flowGetListOfAssignablePermissionsForOrganize(params);
  return value;
};