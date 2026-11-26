import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户id
 * listOfRoleIds 角色id列表
 * organizeId 组织id
 */
export interface FlowAccountRoleSettingsParams {
  accountId: string;
  listOfRoleIds: string[];
  organizeId: string;
}

/**
 * 出参明细:
 */
export interface FlowAccountRoleSettingsResults {
}

/**
 * 账户角色设置
 * @com.horsecoder.platform.permission/FLOW_ACCOUNT_ROLE_SETTINGS
 */
export const flowAccountRoleSettings = async (params: FlowAccountRoleSettingsParams): StandardPromise<FlowAccountRoleSettingsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_ACCOUNT_ROLE_SETTINGS',
      params: { ...params },
    },
  });
};


export const flowAccountRoleSettingsFacade = async (params: FlowAccountRoleSettingsParams): Promise<FlowAccountRoleSettingsResults> => {
  const { data: { value } } =  await flowAccountRoleSettings(params);
  return value;
};