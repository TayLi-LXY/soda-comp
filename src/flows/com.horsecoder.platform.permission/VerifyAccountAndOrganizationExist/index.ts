import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * accountId 账户ID
 * organizeId 组织ID
 */
export interface FlowVerifyAccountAndOrganizationExistParams {
  accountId: string;
  organizeId: string;
}

/**
 * 出参明细:
 * account 账户
 * organize 组织
 */
export interface FlowVerifyAccountAndOrganizationExistResults {
  account?: any;
  organize?: any;
}

/**
 * 校验账户和组织是否存在
 * @com.horsecoder.platform.permission/FLOW_VERIFY_ACCOUNT_AND_ORGANIZATION_EXIST
 */
export const flowVerifyAccountAndOrganizationExist = async (params: FlowVerifyAccountAndOrganizationExistParams): StandardPromise<FlowVerifyAccountAndOrganizationExistResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_VERIFY_ACCOUNT_AND_ORGANIZATION_EXIST',
      params: { ...params },
    },
  });
};


export const flowVerifyAccountAndOrganizationExistFacade = async (params: FlowVerifyAccountAndOrganizationExistParams): Promise<FlowVerifyAccountAndOrganizationExistResults> => {
  const { data: { value } } =  await flowVerifyAccountAndOrganizationExist(params);
  return value;
};