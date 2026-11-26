import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * removedProductIds 下架产品ID列表
 */
export interface FlowBatchRemovalOfProductsParams {
  removedProductIds: string[];
}

/**
 * 出参明细:
 */
export interface FlowBatchRemovalOfProductsResults {
}

/**
 * 批量下架产品
 * @com.horsecoder.market/FLOW_BATCH_REMOVAL_OF_PRODUCTS
 */
export const flowBatchRemovalOfProducts = async (params: FlowBatchRemovalOfProductsParams): StandardPromise<FlowBatchRemovalOfProductsResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_BATCH_REMOVAL_OF_PRODUCTS',
      params: { ...params },
    },
  });
};


export const flowBatchRemovalOfProductsFacade = async (params: FlowBatchRemovalOfProductsParams): Promise<FlowBatchRemovalOfProductsResults> => {
  const { data: { value } } =  await flowBatchRemovalOfProducts(params);
  return value;
};