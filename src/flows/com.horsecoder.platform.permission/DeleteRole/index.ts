import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * roleId 角色Id
 */
export interface FlowDeleteRoleParams {
  roleId: string;
}

/**
 * 出参明细:
 */
export interface FlowDeleteRoleResults {
}

/**
 * 删除角色
 * @com.horsecoder.platform.permission/FLOW_DELETE_ROLE
 */
export const flowDeleteRole = async (params: FlowDeleteRoleParams): StandardPromise<FlowDeleteRoleResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_DELETE_ROLE',
      params: { ...params },
    },
  });
};


export const flowDeleteRoleFacade = async (params: FlowDeleteRoleParams): Promise<FlowDeleteRoleResults> => {
  const { data: { value } } =  await flowDeleteRole(params);
  return value;
};