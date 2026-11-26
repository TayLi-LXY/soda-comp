import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ListingAndDelistingOfProductsWithDependentProducts } from '@/flows/com.horsecoder.market/VerifyOnoffStatusOfProductsAndDependentProducts/types/ListingAndDelistingOfProductsWithDependentProducts';

/**
 * 入参明细:
 * productIdList 产品ID列表
 * ifListed 上架下架状态
 */
export interface FlowVerifyOnoffStatusOfProductsAndDependentProductsParams {
  productIdList: string[];
  ifListed?: number;
}

/**
 * 出参明细:
 * listOfProductsIfListed 产品上下架列表
 * verificationResult 校验结果
 */
export interface FlowVerifyOnoffStatusOfProductsAndDependentProductsResults {
  listOfProductsIfListed: ListingAndDelistingOfProductsWithDependentProducts[];
  verificationResult: any;
}

/**
 * 校验产品及依赖产品的上架下架状态
 * @com.horsecoder.market/FLOW_VERIFY_ONOFF_STATUS_OF_PRODUCTS_AND_DEPENDENT_PRODUCTS
 */
export const flowVerifyOnoffStatusOfProductsAndDependentProducts = async (params: FlowVerifyOnoffStatusOfProductsAndDependentProductsParams): StandardPromise<FlowVerifyOnoffStatusOfProductsAndDependentProductsResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_VERIFY_ONOFF_STATUS_OF_PRODUCTS_AND_DEPENDENT_PRODUCTS',
      params: { ...params },
    },
  });
};


export const flowVerifyOnoffStatusOfProductsAndDependentProductsFacade = async (params: FlowVerifyOnoffStatusOfProductsAndDependentProductsParams): Promise<FlowVerifyOnoffStatusOfProductsAndDependentProductsResults> => {
  const { data: { value } } =  await flowVerifyOnoffStatusOfProductsAndDependentProducts(params);
  return value;
};