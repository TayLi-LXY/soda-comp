import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeFiltering } from '@/flows/com.horsecoder.platform.permission/GetOrganizeViewAndOrganizeListByDepth/types/OrganizeFiltering';
import type { OrganizeTree } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTree';
import type { OrganizeOutput } from '@/flows/com.horsecoder.platform.permission/GetOrganizeViewAndOrganizeListByDepth/types/OrganizeOutput';

/**
 * 入参明细:
 * accountId 账户ID
 * lowerDepth 下级深度
 * superiorDepth 上级深度
 * organizeFilterMapper 组织筛选实体
 * targetOrganizeId 目标组织ID
 */
export interface FlowObtainAccountOrganizeViewAndOrganizeListByDepthParams {
  accountId: string;
  lowerDepth?: number;
  superiorDepth?: number;
  organizeFilterMapper?: OrganizeFiltering;
  targetOrganizeId?: string;
}

/**
 * 出参明细:
 * organizeTreeList 组织树列表
 * organizeOutputList 组织输出列表
 */
export interface FlowObtainAccountOrganizeViewAndOrganizeListByDepthResults {
  organizeTreeList: OrganizeTree[];
  organizeOutputList: OrganizeOutput[];
}

/**
 * 按深度获取账户组织视图和组织列表
 * @com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZE_VIEW_AND_ORGANIZE_LIST_BY_DEPTH
 */
export const flowObtainAccountOrganizeViewAndOrganizeListByDepth = async (params: FlowObtainAccountOrganizeViewAndOrganizeListByDepthParams): StandardPromise<FlowObtainAccountOrganizeViewAndOrganizeListByDepthResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZE_VIEW_AND_ORGANIZE_LIST_BY_DEPTH',
      params: { ...params },
    },
  });
};


export const flowObtainAccountOrganizeViewAndOrganizeListByDepthFacade = async (params: FlowObtainAccountOrganizeViewAndOrganizeListByDepthParams): Promise<FlowObtainAccountOrganizeViewAndOrganizeListByDepthResults> => {
  const { data: { value } } =  await flowObtainAccountOrganizeViewAndOrganizeListByDepth(params);
  return value;
};