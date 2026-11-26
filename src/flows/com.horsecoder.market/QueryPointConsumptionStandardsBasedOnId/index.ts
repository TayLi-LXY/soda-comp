import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { SpecificationDetails } from '@/flows/com.horsecoder.market/QueryPointConsumptionStandardsBasedOnId/types/SpecificationDetails';

/**
 * 入参明细:
 * standardizedId 规范ID
 */
export interface FlowQueryPointConsumptionStandardsBasedOnIdParams {
  standardizedId: string;
}

/**
 * 出参明细:
 * specificationDetails 规范详情
 */
export interface FlowQueryPointConsumptionStandardsBasedOnIdResults {
  specificationDetails?: SpecificationDetails;
}

/**
 * 根据ID查询积分消耗规范
 * @com.horsecoder.market/FLOW_QUERY_POINT_CONSUMPTION_STANDARDS_BASED_ON_ID
 */
export const flowQueryPointConsumptionStandardsBasedOnId = async (params: FlowQueryPointConsumptionStandardsBasedOnIdParams): StandardPromise<FlowQueryPointConsumptionStandardsBasedOnIdResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_QUERY_POINT_CONSUMPTION_STANDARDS_BASED_ON_ID',
      params: { ...params },
    },
  });
};


export const flowQueryPointConsumptionStandardsBasedOnIdFacade = async (params: FlowQueryPointConsumptionStandardsBasedOnIdParams): Promise<FlowQueryPointConsumptionStandardsBasedOnIdResults> => {
  const { data: { value } } =  await flowQueryPointConsumptionStandardsBasedOnId(params);
  return value;
};