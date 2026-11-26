import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * organizeId 组织ID
 * permissionId 权限ID
 * assignPersonAccountId 分配人账户ID
 * authorizeOrganizeId 授权组织ID
 */
export interface FlowDeleteOrganizePermissionParams {
  organizeId: string;
  permissionId: string;
  assignPersonAccountId: string;
  authorizeOrganizeId: string;
}

/**
 * 出参明细:
 */
export interface FlowDeleteOrganizePermissionResults {
}

/**
 * 删除组织权限
 * @com.horsecoder.platform.permission/FLOW_DELETE_ORGANIZE_PERMISSION
 */
export const flowDeleteOrganizePermission = async (params: FlowDeleteOrganizePermissionParams): StandardPromise<FlowDeleteOrganizePermissionResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_DELETE_ORGANIZE_PERMISSION',
      params: { ...params },
    },
  });
};


export const flowDeleteOrganizePermissionFacade = async (params: FlowDeleteOrganizePermissionParams): Promise<FlowDeleteOrganizePermissionResults> => {
  const { data: { value } } =  await flowDeleteOrganizePermission(params);
  return value;
};