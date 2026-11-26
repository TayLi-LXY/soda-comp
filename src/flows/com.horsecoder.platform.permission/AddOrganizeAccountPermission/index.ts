import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * assignPersonAccountId 分配人账户ID
 * accountId 账户ID
 * permissionIdList 权限ID列表
 * organizeId 组织ID
 */
export interface FlowAddOrganizeAccountPermissionParams {
  assignPersonAccountId: string;
  accountId: string;
  permissionIdList: string[];
  organizeId: string;
}

/**
 * 出参明细:
 */
export interface FlowAddOrganizeAccountPermissionResults {
}

/**
 * 新增组织账户权限
 * @com.horsecoder.platform.permission/FLOW_ADD_ORGANIZE_ACCOUNT_PERMISSION
 */
export const flowAddOrganizeAccountPermission = async (params: FlowAddOrganizeAccountPermissionParams): StandardPromise<FlowAddOrganizeAccountPermissionResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_ADD_ORGANIZE_ACCOUNT_PERMISSION',
      params: { ...params },
    },
  });
};


export const flowAddOrganizeAccountPermissionFacade = async (params: FlowAddOrganizeAccountPermissionParams): Promise<FlowAddOrganizeAccountPermissionResults> => {
  const { data: { value } } =  await flowAddOrganizeAccountPermission(params);
  return value;
};