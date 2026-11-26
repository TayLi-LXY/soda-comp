import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeTypeResult } from '@/flows/com.horsecoder.platform.permission/FilterOrganizeTypeListBasedOnOrganizeTypeIdList/types/OrganizeTypeResult';

/**
 * 入参明细:
 * organizeTypeIdList 组织类型id列表
 */
export interface FlowFilterOrganizeTypeListBasedOnOrganizeTypeIdListParams {
  organizeTypeIdList: string[];
}

/**
 * 出参明细:
 * organizeTypeResultList 组织类型结果列表
 */
export interface FlowFilterOrganizeTypeListBasedOnOrganizeTypeIdListResults {
  organizeTypeResultList: OrganizeTypeResult[];
}

/**
 * 根据组织类型id列表筛选组织类型列表
 * @com.horsecoder.platform.permission/FLOW_FILTER_ORGANIZE_TYPE_LIST_BASED_ON_ORGANIZE_TYPE_ID_LIST
 */
export const flowFilterOrganizeTypeListBasedOnOrganizeTypeIdList = async (params: FlowFilterOrganizeTypeListBasedOnOrganizeTypeIdListParams): StandardPromise<FlowFilterOrganizeTypeListBasedOnOrganizeTypeIdListResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_FILTER_ORGANIZE_TYPE_LIST_BASED_ON_ORGANIZE_TYPE_ID_LIST',
      params: { ...params },
    },
  });
};


export const flowFilterOrganizeTypeListBasedOnOrganizeTypeIdListFacade = async (params: FlowFilterOrganizeTypeListBasedOnOrganizeTypeIdListParams): Promise<FlowFilterOrganizeTypeListBasedOnOrganizeTypeIdListResults> => {
  const { data: { value } } =  await flowFilterOrganizeTypeListBasedOnOrganizeTypeIdList(params);
  return value;
};