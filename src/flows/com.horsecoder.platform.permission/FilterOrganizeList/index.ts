import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeFiltering } from '@/flows/com.horsecoder.platform.permission/GetOrganizeViewAndOrganizeListByDepth/types/OrganizeFiltering';
import type { OrganizeReturn } from '@/flows/com.horsecoder.platform.permission/FilterOrganizeList/types/OrganizeReturn';

/**
 * 入参明细:
 * organizeFiltering 组织筛选
 */
export interface FlowFilterOrganizeListParams {
  organizeFiltering: OrganizeFiltering;
}

/**
 * 出参明细:
 * organizeReturnList 组织返回列表
 */
export interface FlowFilterOrganizeListResults {
  organizeReturnList: OrganizeReturn[];
}

/**
 * 筛选组织列表
 * @com.horsecoder.platform.permission/FLOW_FILTER_ORGANIZE_LIST
 */
export const flowFilterOrganizeList = async (params: FlowFilterOrganizeListParams): StandardPromise<FlowFilterOrganizeListResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_FILTER_ORGANIZE_LIST',
      params: { ...params },
    },
  });
};


export const flowFilterOrganizeListFacade = async (params: FlowFilterOrganizeListParams): Promise<FlowFilterOrganizeListResults> => {
  const { data: { value } } =  await flowFilterOrganizeList(params);
  return value;
};