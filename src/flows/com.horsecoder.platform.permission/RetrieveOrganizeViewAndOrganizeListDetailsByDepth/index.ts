import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeFiltering } from '@/flows/com.horsecoder.platform.permission/GetOrganizeViewAndOrganizeListByDepth/types/OrganizeFiltering';
import type { OrganizeTree } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTree';
import type { OrganizeOutput } from '@/flows/com.horsecoder.platform.permission/GetOrganizeViewAndOrganizeListByDepth/types/OrganizeOutput';
import type { OrganizeDetail } from '@/flows/com.horsecoder.platform.permission/BatchRetrieveOrganizeDetailList/types/OrganizeDetail';

/**
 * 入参明细:
 * targetOrganizeId 目标组织ID
 * superiorDepth 上级深度
 * lowerDepth 下级深度
 * organizeFilterMapper 组织筛选实体
 */
export interface FlowRetrieveOrganizeViewAndOrganizeListDetailsByDepthParams {
  targetOrganizeId: string;
  superiorDepth?: number;
  lowerDepth?: number;
  organizeFilterMapper?: OrganizeFiltering;
}

/**
 * 出参明细:
 * organizeTree 组织树
 * organizeOutputList 组织输出列表
 * organizeDetailList 组织详情列表
 */
export interface FlowRetrieveOrganizeViewAndOrganizeListDetailsByDepthResults {
  organizeTree: OrganizeTree;
  organizeOutputList: OrganizeOutput[];
  organizeDetailList: OrganizeDetail[];
}

/**
 * 按深度获取组织视图和组织列表详情
 * @com.horsecoder.platform.permission/FLOW_RETRIEVE_ORGANIZE_VIEW_AND_ORGANIZE_LIST_DETAILS_BY_DEPTH
 */
export const flowRetrieveOrganizeViewAndOrganizeListDetailsByDepth = async (params: FlowRetrieveOrganizeViewAndOrganizeListDetailsByDepthParams): StandardPromise<FlowRetrieveOrganizeViewAndOrganizeListDetailsByDepthResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_RETRIEVE_ORGANIZE_VIEW_AND_ORGANIZE_LIST_DETAILS_BY_DEPTH',
      params: { ...params },
    },
  });
};


export const flowRetrieveOrganizeViewAndOrganizeListDetailsByDepthFacade = async (params: FlowRetrieveOrganizeViewAndOrganizeListDetailsByDepthParams): Promise<FlowRetrieveOrganizeViewAndOrganizeListDetailsByDepthResults> => {
  const { data: { value } } =  await flowRetrieveOrganizeViewAndOrganizeListDetailsByDepth(params);
  return value;
};