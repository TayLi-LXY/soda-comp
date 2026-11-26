import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ProductWithDependencies } from '@/flows/com.horsecoder.market/BatchCreationOfProductsAndirDependencies/types/ProductWithDependencies';

/**
 * 入参明细:
 * productNumber 产品编码
 */
export interface FlowObtainListOfProductsWithDependenciesParams {
  productNumber: string;
}

/**
 * 出参明细:
 * productWithDependencies 产品及其依赖列表
 */
export interface FlowObtainListOfProductsWithDependenciesResults {
  productWithDependencies: ProductWithDependencies;
}

/**
 * 获取产品及其依赖的产品列表
 * @com.horsecoder.market/FLOW_OBTAIN_LIST_OF_PRODUCTS_WITH_DEPENDENCIES
 */
export const flowObtainListOfProductsWithDependencies = async (params: FlowObtainListOfProductsWithDependenciesParams): StandardPromise<FlowObtainListOfProductsWithDependenciesResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_OBTAIN_LIST_OF_PRODUCTS_WITH_DEPENDENCIES',
      params: { ...params },
    },
  });
};


export const flowObtainListOfProductsWithDependenciesFacade = async (params: FlowObtainListOfProductsWithDependenciesParams): Promise<FlowObtainListOfProductsWithDependenciesResults> => {
  const { data: { value } } =  await flowObtainListOfProductsWithDependencies(params);
  return value;
};