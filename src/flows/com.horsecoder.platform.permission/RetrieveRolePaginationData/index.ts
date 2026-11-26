import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { RolePaginationFilter } from '@/flows/com.horsecoder.platform.permission/RetrieveRolePaginationData/types/RolePaginationFilter';
import type { RolePaginationEntity } from '@/flows/com.horsecoder.platform.permission/RetrieveRolePaginationData/types/RolePaginationEntity';

/**
 * 入参明细:
 * targetOrganizeId 目标组织ID
 * superiorDepth 上级深度
 * lowerDepth 下级深度
 * rolePaginationFilter 角色分页Filter
 */
export interface FlowRetrieveRolePaginationDataParams {
  targetOrganizeId: string;
  superiorDepth?: number;
  lowerDepth?: number;
  rolePaginationFilter: RolePaginationFilter;
}

/**
 * 出参明细:
 * rolePaginationEntity 角色分页实体
 * numberOfPages 分页数量
 */
export interface FlowRetrieveRolePaginationDataResults {
  rolePaginationEntity: RolePaginationEntity[];
  numberOfPages: any;
}

/**
 * 获取角色分页数据
 * @com.horsecoder.platform.permission/FLOW_RETRIEVE_ROLE_PAGINATION_DATA
 */
export const flowRetrieveRolePaginationData = async (params: FlowRetrieveRolePaginationDataParams): StandardPromise<FlowRetrieveRolePaginationDataResults> => {
  return request('/horsecoder-platform-permission/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.permission/FLOW_RETRIEVE_ROLE_PAGINATION_DATA',
      params: { ...params },
    },
  });
};


export const flowRetrieveRolePaginationDataFacade = async (params: FlowRetrieveRolePaginationDataParams): Promise<FlowRetrieveRolePaginationDataResults> => {
  const { data: { value } } =  await flowRetrieveRolePaginationData(params);
  return value;
};