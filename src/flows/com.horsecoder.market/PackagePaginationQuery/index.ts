import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PackagePaginationFilter } from '@/flows/com.horsecoder.market/PackagePaginationQuery/types/PackagePaginationFilter';
import type { PackagePaginationEntity } from '@/flows/com.horsecoder.market/PackagePaginationQuery/types/PackagePaginationEntity';

/**
 * 入参明细:
 * packagePaginationFilter 套餐分页Filter
 */
export interface FlowPackagePaginationQueryParams {
  packagePaginationFilter?: PackagePaginationFilter;
}

/**
 * 出参明细:
 * numberOfPageElementsInPackage 套餐分页元素数量
 * packagePaginationEntityList 套餐分页实体列表
 */
export interface FlowPackagePaginationQueryResults {
  numberOfPageElementsInPackage?: any;
  packagePaginationEntityList?: PackagePaginationEntity[];
}

/**
 * 套餐分页查询
 * @com.horsecoder.market/FLOW_PACKAGE_PAGINATION_QUERY
 */
export const flowPackagePaginationQuery = async (params: FlowPackagePaginationQueryParams): StandardPromise<FlowPackagePaginationQueryResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_PACKAGE_PAGINATION_QUERY',
      params: { ...params },
    },
  });
};


export const flowPackagePaginationQueryFacade = async (params: FlowPackagePaginationQueryParams): Promise<FlowPackagePaginationQueryResults> => {
  const { data: { value } } =  await flowPackagePaginationQuery(params);
  return value;
};