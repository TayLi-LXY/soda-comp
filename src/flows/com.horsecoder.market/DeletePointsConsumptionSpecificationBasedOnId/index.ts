import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * standardizedId 规范ID
 */
export interface FlowDeletePointsConsumptionSpecificationBasedOnIdParams {
  standardizedId: string;
}

/**
 * 出参明细:
 */
export interface FlowDeletePointsConsumptionSpecificationBasedOnIdResults {
}

/**
 * 根据ID删除积分消耗规范
 * @com.horsecoder.market/FLOW_DELETE_POINTS_CONSUMPTION_SPECIFICATION_BASED_ON_ID
 */
export const flowDeletePointsConsumptionSpecificationBasedOnId = async (params: FlowDeletePointsConsumptionSpecificationBasedOnIdParams): StandardPromise<FlowDeletePointsConsumptionSpecificationBasedOnIdResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_DELETE_POINTS_CONSUMPTION_SPECIFICATION_BASED_ON_ID',
      params: { ...params },
    },
  });
};


export const flowDeletePointsConsumptionSpecificationBasedOnIdFacade = async (params: FlowDeletePointsConsumptionSpecificationBasedOnIdParams): Promise<FlowDeletePointsConsumptionSpecificationBasedOnIdResults> => {
  const { data: { value } } =  await flowDeletePointsConsumptionSpecificationBasedOnId(params);
  return value;
};