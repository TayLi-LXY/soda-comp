import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PointsConsumptionEntity } from '@/flows/com.horsecoder.market/CreateEditPointsConsumptionSpecification/types/PointsConsumptionEntity';

/**
 * 入参明细:
 * pointsConsumptionEntity 积分消耗实体
 */
export interface FlowCreateEditPointsConsumptionSpecificationParams {
  pointsConsumptionEntity?: PointsConsumptionEntity;
}

/**
 * 出参明细:
 * standardizedId 规范ID
 */
export interface FlowCreateEditPointsConsumptionSpecificationResults {
  standardizedId?: string;
}

/**
 * 创建编辑积分消耗规范
 * @com.horsecoder.market/FLOW_CREATE_EDIT_POINTS_CONSUMPTION_SPECIFICATION
 */
export const flowCreateEditPointsConsumptionSpecification = async (params: FlowCreateEditPointsConsumptionSpecificationParams): StandardPromise<FlowCreateEditPointsConsumptionSpecificationResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_CREATE_EDIT_POINTS_CONSUMPTION_SPECIFICATION',
      params: { ...params },
    },
  });
};


export const flowCreateEditPointsConsumptionSpecificationFacade = async (params: FlowCreateEditPointsConsumptionSpecificationParams): Promise<FlowCreateEditPointsConsumptionSpecificationResults> => {
  const { data: { value } } =  await flowCreateEditPointsConsumptionSpecification(params);
  return value;
};