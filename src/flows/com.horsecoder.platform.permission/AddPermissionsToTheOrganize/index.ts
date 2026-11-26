import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * organizeId 组织ID
 * permissionId 权限ID
 * assignPersonAccountId 分配人账户ID
 * authorizeOrganizeId 授权组织ID
 */
export interface FlowAddPermissionsToTheOrganizeParams {
  organizeId: string;
  permissionId: string;
  assignPersonAccountId: string;
  authorizeOrganizeId: string;
}

/**
 * 出参明细:
 */
export interface FlowAddPermissionsToTheOrganizeResults {
}

/**
 * 给组织添加权限
 * @com.horsecoder.platform.permission/FLOW_ADD_PERMISSIONS_TO_THE_ORGANIZE
 */
export const flowAddPermissionsToTheOrganize = async (params: FlowAddPermissionsToTheOrganizeParams): StandardPromise<FlowAddPermissionsToTheOrganizeResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_ADD_PERMISSIONS_TO_THE_ORGANIZE',
      params: { ...params },
    },
  });
};


export const flowAddPermissionsToTheOrganizeFacade = async (params: FlowAddPermissionsToTheOrganizeParams): Promise<FlowAddPermissionsToTheOrganizeResults> => {
  const { data: { value } } =  await flowAddPermissionsToTheOrganize(params);
  return value;
};