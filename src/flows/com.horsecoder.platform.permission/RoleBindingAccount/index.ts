import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户Id
 * roleId 角色Id
 * addRemove 添加/删除
 * organizeId 组织Id
 */
export interface FlowRoleBindingAccountParams {
  accountId: string;
  roleId: string;
  addRemove: string;
  organizeId: string;
}

/**
 * 出参明细:
 */
export interface FlowRoleBindingAccountResults {
}

/**
 * 角色绑定账户
 * @com.horsecoder.platform.permission/FLOW_ROLE_BINDING_ACCOUNT
 */
export const flowRoleBindingAccount = async (params: FlowRoleBindingAccountParams): StandardPromise<FlowRoleBindingAccountResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_ROLE_BINDING_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowRoleBindingAccountFacade = async (params: FlowRoleBindingAccountParams): Promise<FlowRoleBindingAccountResults> => {
  const { data: { value } } =  await flowRoleBindingAccount(params);
  return value;
};