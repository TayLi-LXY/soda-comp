import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeTypeResult } from '@/flows/com.horsecoder.platform.permission/FilterOrganizeTypeListBasedOnOrganizeTypeIdList/types/OrganizeTypeResult';
import type { OrganizeTO } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTO';
import type { AccountEntity } from '@/flows/com.horsecoder.platform.permission/FilterAccountsListCanBoundToOrganize/types/AccountEntity';

/**
 * 入参明细:
 * organizeId 组织ID
 */
export interface FlowGetOrganizeDetailsParams {
  organizeId: string;
}

/**
 * 出参明细:
 * organizeType 组织类型
 * parentOrganize 上级组织
 * adminAccount 管理员账户
 * organizePersonNumber 组织人数
 * resultOrganize 组织实体
 */
export interface FlowGetOrganizeDetailsResults {
  organizeType: OrganizeTypeResult;
  parentOrganize?: OrganizeTO;
  adminAccount: AccountEntity;
  organizePersonNumber: number;
  resultOrganize: OrganizeTO;
}

/**
 * 获取组织详情
 * @com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_DETAILS
 */
export const flowGetOrganizeDetails = async (params: FlowGetOrganizeDetailsParams): StandardPromise<FlowGetOrganizeDetailsResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_DETAILS',
      params: { ...params },
    },
  });
};


export const flowGetOrganizeDetailsFacade = async (params: FlowGetOrganizeDetailsParams): Promise<FlowGetOrganizeDetailsResults> => {
  const { data: { value } } =  await flowGetOrganizeDetails(params);
  return value;
};