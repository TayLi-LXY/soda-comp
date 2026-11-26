import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ProductWithDependencies } from '@/flows/com.horsecoder.market/BatchCreationOfProductsAndirDependencies/types/ProductWithDependencies';

/**
 * 入参明细:
 * productWithDependenciesList 产品及其依赖列表的列表
 */
export interface FlowBatchCreationOfProductsAndirDependenciesParams {
  productWithDependenciesList: ProductWithDependencies[];
}

/**
 * 出参明细:
 * productIdList 产品ID列表
 */
export interface FlowBatchCreationOfProductsAndirDependenciesResults {
  productIdList: string[];
}

/**
 * 批量创建产品及其依赖
 * @com.horsecoder.market/FLOW_BATCH_CREATION_OF_PRODUCTS_ANDIR_DEPENDENCIES
 */
export const flowBatchCreationOfProductsAndirDependencies = async (params: FlowBatchCreationOfProductsAndirDependenciesParams): StandardPromise<FlowBatchCreationOfProductsAndirDependenciesResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_BATCH_CREATION_OF_PRODUCTS_ANDIR_DEPENDENCIES',
      params: { ...params },
    },
  });
};


export const flowBatchCreationOfProductsAndirDependenciesFacade = async (params: FlowBatchCreationOfProductsAndirDependenciesParams): Promise<FlowBatchCreationOfProductsAndirDependenciesResults> => {
  const { data: { value } } =  await flowBatchCreationOfProductsAndirDependencies(params);
  return value;
};