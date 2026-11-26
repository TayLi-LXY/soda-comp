import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 * permissionIdList 权限ID列表
 * organizeId 组织ID
 * assignPersonAccountId 分配人账户ID
 */
export interface FlowDeleteOrganizeAccountPermissionsParams {
  accountId: string;
  permissionIdList: string[];
  organizeId: string;
  assignPersonAccountId: string;
}

/**
 * 出参明细:
 */
export interface FlowDeleteOrganizeAccountPermissionsResults {
}

/**
 * 删除组织账户权限
 * @com.horsecoder.platform.permission/FLOW_DELETE_ORGANIZE_ACCOUNT_PERMISSIONS
 */
export const flowDeleteOrganizeAccountPermissions = async (params: FlowDeleteOrganizeAccountPermissionsParams): StandardPromise<FlowDeleteOrganizeAccountPermissionsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_DELETE_ORGANIZE_ACCOUNT_PERMISSIONS',
      params: { ...params },
    },
  });
};


export const flowDeleteOrganizeAccountPermissionsFacade = async (params: FlowDeleteOrganizeAccountPermissionsParams): Promise<FlowDeleteOrganizeAccountPermissionsResults> => {
  const { data: { value } } =  await flowDeleteOrganizeAccountPermissions(params);
  return value;
};