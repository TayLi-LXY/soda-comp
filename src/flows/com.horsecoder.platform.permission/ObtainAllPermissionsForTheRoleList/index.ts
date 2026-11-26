import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CharacterEntity } from '@/flows/com.horsecoder.platform.permission/ObtainAllPermissionsForTheRoleList/types/CharacterEntity';

/**
 * 入参明细:
 * roleList 角色列表
 */
export interface FlowObtainAllPermissionsForTheRoleListParams {
  roleList: CharacterEntity[];
}

/**
 * 出参明细:
 * rolePermissionList 角色权限ID列表
 */
export interface FlowObtainAllPermissionsForTheRoleListResults {
  rolePermissionList: string[];
}

/**
 * 获取角色列表所有权限
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_ALL_PERMISSIONS_FOR_THE_ROLE_LIST
 */
export const flowObtainAllPermissionsForTheRoleList = async (params: FlowObtainAllPermissionsForTheRoleListParams): StandardPromise<FlowObtainAllPermissionsForTheRoleListResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_ALL_PERMISSIONS_FOR_THE_ROLE_LIST',
      params: { ...params },
    },
  });
};


export const flowObtainAllPermissionsForTheRoleListFacade = async (params: FlowObtainAllPermissionsForTheRoleListParams): Promise<FlowObtainAllPermissionsForTheRoleListResults> => {
  const { data: { value } } =  await flowObtainAllPermissionsForTheRoleList(params);
  return value;
};