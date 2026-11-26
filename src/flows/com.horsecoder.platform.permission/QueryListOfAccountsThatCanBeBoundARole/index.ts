import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { AccountBindingRoleEntity } from '@/flows/com.horsecoder.platform.permission/QueryListOfAccountsThatCanBeBoundARole/types/AccountBindingRoleEntity';

/**
 * 入参明细:
 * targetOrganizeId 目标组织ID
 * superiorDepth 上级深度
 * lowerDepth 下级深度
 * roleId 角色Id
 */
export interface FlowQueryListOfAccountsThatCanBeBoundARoleParams {
  targetOrganizeId: string;
  superiorDepth?: number;
  lowerDepth?: number;
  roleId: string;
}

/**
 * 出参明细:
 * accountBindingRoleEntity 账户绑定角色实体
 */
export interface FlowQueryListOfAccountsThatCanBeBoundARoleResults {
  accountBindingRoleEntity: AccountBindingRoleEntity[];
}

/**
 * 查询角色可绑定账户列表
 * @com.horsecoder.platform.permission/FLOW_QUERY_LIST_OF_ACCOUNTS_THAT_CAN_BE_BOUND_A_ROLE
 */
export const flowQueryListOfAccountsThatCanBeBoundARole = async (params: FlowQueryListOfAccountsThatCanBeBoundARoleParams): StandardPromise<FlowQueryListOfAccountsThatCanBeBoundARoleResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_QUERY_LIST_OF_ACCOUNTS_THAT_CAN_BE_BOUND_A_ROLE',
      params: { ...params },
    },
  });
};


export const flowQueryListOfAccountsThatCanBeBoundARoleFacade = async (params: FlowQueryListOfAccountsThatCanBeBoundARoleParams): Promise<FlowQueryListOfAccountsThatCanBeBoundARoleResults> => {
  const { data: { value } } =  await flowQueryListOfAccountsThatCanBeBoundARole(params);
  return value;
};