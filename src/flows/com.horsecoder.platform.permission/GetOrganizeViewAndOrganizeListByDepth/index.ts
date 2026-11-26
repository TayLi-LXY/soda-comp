import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeFiltering } from '@/flows/com.horsecoder.platform.permission/GetOrganizeViewAndOrganizeListByDepth/types/OrganizeFiltering';
import type { OrganizeTree } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTree';
import type { OrganizeOutput } from '@/flows/com.horsecoder.platform.permission/GetOrganizeViewAndOrganizeListByDepth/types/OrganizeOutput';

/**
 * 入参明细:
 * targetOrganizeId 目标组织ID
 * superiorDepth 上级深度
 * lowerDepth 下级深度
 * organizeFilterMapper 组织筛选实体
 */
export interface FlowGetOrganizeViewAndOrganizeListByDepthParams {
  targetOrganizeId: string;
  superiorDepth?: number;
  lowerDepth?: number;
  organizeFilterMapper?: OrganizeFiltering;
}

/**
 * 出参明细:
 * organizeTree 组织树
 * organizeOutputList 组织输出列表
 */
export interface FlowGetOrganizeViewAndOrganizeListByDepthResults {
  organizeTree: OrganizeTree;
  organizeOutputList: OrganizeOutput[];
}

/**
 * 按深度获取组织视图和组织列表
 * @com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_VIEW_AND_ORGANIZE_LIST_BY_DEPTH
 */
export const flowGetOrganizeViewAndOrganizeListByDepth = async (params: FlowGetOrganizeViewAndOrganizeListByDepthParams): StandardPromise<FlowGetOrganizeViewAndOrganizeListByDepthResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_VIEW_AND_ORGANIZE_LIST_BY_DEPTH',
      params: { ...params },
    },
  });
};


export const flowGetOrganizeViewAndOrganizeListByDepthFacade = async (params: FlowGetOrganizeViewAndOrganizeListByDepthParams): Promise<FlowGetOrganizeViewAndOrganizeListByDepthResults> => {
  const { data: { value } } =  await flowGetOrganizeViewAndOrganizeListByDepth(params);
  return value;
};