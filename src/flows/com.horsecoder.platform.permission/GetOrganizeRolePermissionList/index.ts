import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CharacterEntity } from '@/flows/com.horsecoder.platform.permission/ObtainAllPermissionsForTheRoleList/types/CharacterEntity';
import type { OrganizeRolePermissionEntity } from '@/flows/com.horsecoder.platform.permission/GetOrganizeRolePermissionList/types/OrganizeRolePermissionEntity';

/**
 * 入参明细:
 * organizeId 组织ID
 * roleList 角色列表
 */
export interface FlowGetOrganizeRolePermissionListParams {
  organizeId: string;
  roleList: CharacterEntity[];
}

/**
 * 出参明细:
 * organizeRolePermissionEntity 组织角色权限实体
 */
export interface FlowGetOrganizeRolePermissionListResults {
  organizeRolePermissionEntity: OrganizeRolePermissionEntity[];
}

/**
 * 获取组织角色权限列表
 * @com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_ROLE_PERMISSION_LIST
 */
export const flowGetOrganizeRolePermissionList = async (params: FlowGetOrganizeRolePermissionListParams): StandardPromise<FlowGetOrganizeRolePermissionListResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_ROLE_PERMISSION_LIST',
      params: { ...params },
    },
  });
};


export const flowGetOrganizeRolePermissionListFacade = async (params: FlowGetOrganizeRolePermissionListParams): Promise<FlowGetOrganizeRolePermissionListResults> => {
  const { data: { value } } =  await flowGetOrganizeRolePermissionList(params);
  return value;
};