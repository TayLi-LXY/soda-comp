import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * productIdList 产品ID列表
 * ifListed 上架下架状态
 */
export interface FlowVerifyStatusOfProductListingAndDelistingParams {
  productIdList: string[];
  ifListed?: number;
}

/**
 * 出参明细:
 */
export interface FlowVerifyStatusOfProductListingAndDelistingResults {
}

/**
 * 校验产品上架下架状态
 * @com.horsecoder.market/FLOW_VERIFY_STATUS_OF_PRODUCT_LISTING_AND_DELISTING
 */
export const flowVerifyStatusOfProductListingAndDelisting = async (params: FlowVerifyStatusOfProductListingAndDelistingParams): StandardPromise<FlowVerifyStatusOfProductListingAndDelistingResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_VERIFY_STATUS_OF_PRODUCT_LISTING_AND_DELISTING',
      params: { ...params },
    },
  });
};


export const flowVerifyStatusOfProductListingAndDelistingFacade = async (params: FlowVerifyStatusOfProductListingAndDelistingParams): Promise<FlowVerifyStatusOfProductListingAndDelistingResults> => {
  const { data: { value } } =  await flowVerifyStatusOfProductListingAndDelisting(params);
  return value;
};