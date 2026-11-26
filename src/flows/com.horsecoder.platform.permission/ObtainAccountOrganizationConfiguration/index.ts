import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 * organizeId 组织ID
 */
export interface FlowObtainAccountOrganizationConfigurationParams {
  accountId: string;
  organizeId: string;
}

/**
 * 出参明细:
 * configurationList 配置列表
 */
export interface FlowObtainAccountOrganizationConfigurationResults {
  configurationList: any[];
}

/**
 * 获取账户组织配置
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATION_CONFIGURATION
 */
export const flowObtainAccountOrganizationConfiguration = async (params: FlowObtainAccountOrganizationConfigurationParams): StandardPromise<FlowObtainAccountOrganizationConfigurationResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATION_CONFIGURATION',
      params: { ...params },
    },
  });
};


export const flowObtainAccountOrganizationConfigurationFacade = async (params: FlowObtainAccountOrganizationConfigurationParams): Promise<FlowObtainAccountOrganizationConfigurationResults> => {
  const { data: { value } } =  await flowObtainAccountOrganizationConfiguration(params);
  return value;
};