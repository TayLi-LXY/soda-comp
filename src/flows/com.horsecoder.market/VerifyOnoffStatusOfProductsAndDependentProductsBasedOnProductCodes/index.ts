import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ListingAndDelistingOfProductsWithDependentProducts } from '@/flows/com.horsecoder.market/VerifyOnoffStatusOfProductsAndDependentProducts/types/ListingAndDelistingOfProductsWithDependentProducts';

/**
 * 入参明细:
 * productCodeList 产品编码列表
 * ifListed 上架下架状态
 */
export interface FlowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodesParams {
  productCodeList: string[];
  ifListed?: number;
}

/**
 * 出参明细:
 * verificationResult 校验结果
 * listOfProductsIfListed 产品上下架列表
 */
export interface FlowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodesResults {
  verificationResult: any;
  listOfProductsIfListed: ListingAndDelistingOfProductsWithDependentProducts[];
}

/**
 * 根据产品编码校验产品及依赖产品的上架下架状态
 * @com.horsecoder.market/FLOW_VERIFY_ONOFF_STATUS_OF_PRODUCTS_AND_DEPENDENT_PRODUCTS_BASED_ON_PRODUCT_CODES
 */
export const flowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodes = async (params: FlowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodesParams): StandardPromise<FlowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodesResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_VERIFY_ONOFF_STATUS_OF_PRODUCTS_AND_DEPENDENT_PRODUCTS_BASED_ON_PRODUCT_CODES',
      params: { ...params },
    },
  });
};


export const flowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodesFacade = async (params: FlowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodesParams): Promise<FlowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodesResults> => {
  const { data: { value } } =  await flowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodes(params);
  return value;
};