import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * productId 产品ID
 * listOfDependentProductIds 依赖的产品ID列表
 */
export interface FlowCreateProductDependenciesParams {
  productId: string;
  listOfDependentProductIds: string[];
}

/**
 * 出参明细:
 */
export interface FlowCreateProductDependenciesResults {
}

/**
 * 创建产品依赖
 * @com.horsecoder.market/FLOW_CREATE_PRODUCT_DEPENDENCIES
 */
export const flowCreateProductDependencies = async (params: FlowCreateProductDependenciesParams): StandardPromise<FlowCreateProductDependenciesResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_CREATE_PRODUCT_DEPENDENCIES',
      params: { ...params },
    },
  });
};


export const flowCreateProductDependenciesFacade = async (params: FlowCreateProductDependenciesParams): Promise<FlowCreateProductDependenciesResults> => {
  const { data: { value } } =  await flowCreateProductDependencies(params);
  return value;
};