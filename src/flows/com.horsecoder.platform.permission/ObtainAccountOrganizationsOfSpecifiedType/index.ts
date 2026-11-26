import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OpenOrganize } from '@/flows/com.horsecoder.platform.permission/ObtainAccountOrganizationsOfSpecifiedType/types/OpenOrganize';

/**
 * 入参明细:
 * accountId 账户ID
 * organizeTypeId 组织类型Id
 */
export interface FlowObtainAccountOrganizationsOfSpecifiedTypeParams {
  accountId: string;
  organizeTypeId?: string;
}

/**
 * 出参明细:
 * organizeList 组织列表
 * organizeIdList 组织ID列表
 */
export interface FlowObtainAccountOrganizationsOfSpecifiedTypeResults {
  organizeList: OpenOrganize[];
  organizeIdList: string[];
}

/**
 * 获取账户指定类型的组织列表
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATIONS_OF_SPECIFIED_TYPE
 */
export const flowObtainAccountOrganizationsOfSpecifiedType = async (params: FlowObtainAccountOrganizationsOfSpecifiedTypeParams): StandardPromise<FlowObtainAccountOrganizationsOfSpecifiedTypeResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATIONS_OF_SPECIFIED_TYPE',
      params: { ...params },
    },
  });
};


export const flowObtainAccountOrganizationsOfSpecifiedTypeFacade = async (params: FlowObtainAccountOrganizationsOfSpecifiedTypeParams): Promise<FlowObtainAccountOrganizationsOfSpecifiedTypeResults> => {
  const { data: { value } } =  await flowObtainAccountOrganizationsOfSpecifiedType(params);
  return value;
};