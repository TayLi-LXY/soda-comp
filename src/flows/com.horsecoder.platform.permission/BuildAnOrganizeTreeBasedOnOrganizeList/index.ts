import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrganizeTO } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTO';
import type { OrganizeTree } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/types/OrganizeTree';

/**
 * 入参明细:
 * organizeList 组织列表
 */
export interface FlowBuildAnOrganizeTreeBasedOnOrganizeListParams {
  organizeList: OrganizeTO[];
}

/**
 * 出参明细:
 * organizeTreeList 组织树列表
 */
export interface FlowBuildAnOrganizeTreeBasedOnOrganizeListResults {
  organizeTreeList: OrganizeTree[];
}

/**
 * 根据组织列表构建组织树
 * @com.horsecoder.platform.permission/FLOW_BUILD_AN_ORGANIZE_TREE_BASED_ON_ORGANIZE_LIST
 */
export const flowBuildAnOrganizeTreeBasedOnOrganizeList = async (params: FlowBuildAnOrganizeTreeBasedOnOrganizeListParams): StandardPromise<FlowBuildAnOrganizeTreeBasedOnOrganizeListResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_BUILD_AN_ORGANIZE_TREE_BASED_ON_ORGANIZE_LIST',
      params: { ...params },
    },
  });
};


export const flowBuildAnOrganizeTreeBasedOnOrganizeListFacade = async (params: FlowBuildAnOrganizeTreeBasedOnOrganizeListParams): Promise<FlowBuildAnOrganizeTreeBasedOnOrganizeListResults> => {
  const { data: { value } } =  await flowBuildAnOrganizeTreeBasedOnOrganizeList(params);
  return value;
};