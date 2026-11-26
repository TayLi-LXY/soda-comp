import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PermissionModel } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/types/PermissionModel';

/**
 * 入参明细:
 * accountId 账户ID
 * organizeId 组织ID
 */
export interface FlowGetOrganizeAccountPermissionListParams {
  accountId: string;
  organizeId: string;
}

/**
 * 出参明细:
 * organizeAccountPermissionList 组织账户权限列表
 */
export interface FlowGetOrganizeAccountPermissionListResults {
  organizeAccountPermissionList: PermissionModel[];
}

/**
 * 获取组织账户权限列表
 * @com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_ACCOUNT_PERMISSION_LIST
 */
export const flowGetOrganizeAccountPermissionList = async (params: FlowGetOrganizeAccountPermissionListParams): StandardPromise<FlowGetOrganizeAccountPermissionListResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_ACCOUNT_PERMISSION_LIST',
      params: { ...params },
    },
  });
};


export const flowGetOrganizeAccountPermissionListFacade = async (params: FlowGetOrganizeAccountPermissionListParams): Promise<FlowGetOrganizeAccountPermissionListResults> => {
  const { data: { value } } =  await flowGetOrganizeAccountPermissionList(params);
  return value;
};