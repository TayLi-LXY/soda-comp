import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * userId 用户id
 * repositoryId 仓库id
 * projectId 项目id
 */
export interface FlowOpeningGitWarehousePermissionsParams {
  userId: string;
  repositoryId: string;
  projectId: string;
}

/**
 * 出参明细:
 */
export interface FlowOpeningGitWarehousePermissionsResults {
}

/**
 * 开通git仓库权限流程
 * @com.horsecoder.demand/FLOW_OPENING_GIT_WAREHOUSE_PERMISSIONS
 */
export const flowOpeningGitWarehousePermissions = async (params: FlowOpeningGitWarehousePermissionsParams): StandardPromise<FlowOpeningGitWarehousePermissionsResults> => {
  return request('/horsecoder-demand/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.demand/FLOW_OPENING_GIT_WAREHOUSE_PERMISSIONS',
      params: { ...params },
    },
  });
};


export const flowOpeningGitWarehousePermissionsFacade = async (params: FlowOpeningGitWarehousePermissionsParams): Promise<FlowOpeningGitWarehousePermissionsResults> => {
  const { data: { value } } =  await flowOpeningGitWarehousePermissions(params);
  return value;
};