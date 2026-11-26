import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { StandardizeFilter } from '@/flows/com.horsecoder.market/StandardPaginationQueryForPointConsumption/types/StandardizeFilter';
import type { StandardizePaginationEntities } from '@/flows/com.horsecoder.market/StandardPaginationQueryForPointConsumption/types/StandardizePaginationEntities';

/**
 * 入参明细:
 * standardizeFilter 规范Filter
 */
export interface FlowStandardPaginationQueryForPointConsumptionParams {
  standardizeFilter?: StandardizeFilter;
}

/**
 * 出参明细:
 * standardizeNumberOfPaginationPages 规范分页数量
 * standardizePaginationEntityList 规范分页实体列表
 */
export interface FlowStandardPaginationQueryForPointConsumptionResults {
  standardizeNumberOfPaginationPages?: any;
  standardizePaginationEntityList?: StandardizePaginationEntities[];
}

/**
 * 积分消耗规范分页查询
 * @com.horsecoder.market/FLOW_STANDARD_PAGINATION_QUERY_FOR_POINT_CONSUMPTION
 */
export const flowStandardPaginationQueryForPointConsumption = async (params: FlowStandardPaginationQueryForPointConsumptionParams): StandardPromise<FlowStandardPaginationQueryForPointConsumptionResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_STANDARD_PAGINATION_QUERY_FOR_POINT_CONSUMPTION',
      params: { ...params },
    },
  });
};


export const flowStandardPaginationQueryForPointConsumptionFacade = async (params: FlowStandardPaginationQueryForPointConsumptionParams): Promise<FlowStandardPaginationQueryForPointConsumptionResults> => {
  const { data: { value } } =  await flowStandardPaginationQueryForPointConsumption(params);
  return value;
};