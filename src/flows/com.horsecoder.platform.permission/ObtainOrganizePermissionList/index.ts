import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PermissionModel } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/types/PermissionModel';

/**
 * 入参明细:
 * organizeId 组织ID
 */
export interface FlowObtainOrganizePermissionListParams {
  organizeId: string;
}

/**
 * 出参明细:
 * permissionList 权限列表
 */
export interface FlowObtainOrganizePermissionListResults {
  permissionList: PermissionModel[];
}

/**
 * 获取组织权限列表
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_ORGANIZE_PERMISSION_LIST
 */
export const flowObtainOrganizePermissionList = async (params: FlowObtainOrganizePermissionListParams): StandardPromise<FlowObtainOrganizePermissionListResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_ORGANIZE_PERMISSION_LIST',
      params: { ...params },
    },
  });
};


export const flowObtainOrganizePermissionListFacade = async (params: FlowObtainOrganizePermissionListParams): Promise<FlowObtainOrganizePermissionListResults> => {
  const { data: { value } } =  await flowObtainOrganizePermissionList(params);
  return value;
};