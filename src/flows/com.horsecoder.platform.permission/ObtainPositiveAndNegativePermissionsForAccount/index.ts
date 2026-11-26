import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PositiveNegativePermission } from '@/flows/com.horsecoder.platform.permission/ObtainPositiveAndNegativePermissionsForAccount/types/PositiveNegativePermission';

/**
 * 入参明细:
 * accountId 账户ID
 */
export interface FlowObtainPositiveAndNegativePermissionsForAccountParams {
  accountId: string;
}

/**
 * 出参明细:
 * positivePermissionList 正权限列表
 * negativePermissionList 负权限列表
 */
export interface FlowObtainPositiveAndNegativePermissionsForAccountResults {
  positivePermissionList: PositiveNegativePermission[];
  negativePermissionList: PositiveNegativePermission[];
}

/**
 * 获取账户正负权限
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_POSITIVE_AND_NEGATIVE_PERMISSIONS_FOR_ACCOUNT
 */
export const flowObtainPositiveAndNegativePermissionsForAccount = async (params: FlowObtainPositiveAndNegativePermissionsForAccountParams): StandardPromise<FlowObtainPositiveAndNegativePermissionsForAccountResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_POSITIVE_AND_NEGATIVE_PERMISSIONS_FOR_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowObtainPositiveAndNegativePermissionsForAccountFacade = async (params: FlowObtainPositiveAndNegativePermissionsForAccountParams): Promise<FlowObtainPositiveAndNegativePermissionsForAccountResults> => {
  const { data: { value } } =  await flowObtainPositiveAndNegativePermissionsForAccount(params);
  return value;
};