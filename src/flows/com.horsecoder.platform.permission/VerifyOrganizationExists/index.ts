import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * organizeId 组织ID
 */
export interface FlowVerifyOrganizationExistsParams {
  organizeId: string;
}

/**
 * 出参明细:
 * organize 组织
 */
export interface FlowVerifyOrganizationExistsResults {
  organize?: any;
}

/**
 * 校验组织是否存在
 * @com.horsecoder.platform.permission/FLOW_VERIFY_ORGANIZATION_EXISTS
 */
export const flowVerifyOrganizationExists = async (params: FlowVerifyOrganizationExistsParams): StandardPromise<FlowVerifyOrganizationExistsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_VERIFY_ORGANIZATION_EXISTS',
      params: { ...params },
    },
  });
};


export const flowVerifyOrganizationExistsFacade = async (params: FlowVerifyOrganizationExistsParams): Promise<FlowVerifyOrganizationExistsResults> => {
  const { data: { value } } =  await flowVerifyOrganizationExists(params);
  return value;
};