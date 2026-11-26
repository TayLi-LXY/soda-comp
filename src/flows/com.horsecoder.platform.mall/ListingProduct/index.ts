import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ProductWithDependencies } from '@/flows/com.horsecoder.market/BatchCreationOfProductsAndirDependencies/types/ProductWithDependencies';
import type { ProductDetailsAdd } from '@/flows/com.horsecoder.platform.mall/ListingProduct/types/ProductDetailsAdd';

/**
 * 入参明细:
 * productName 商品名称
 * displayImageUrl 展示图片url
 * classificationId 分类ID
 * productList 产品列表
 * userIdForListing 上架用户ID
 * productDetailsList 商品详情新增列表
 * productIntroduction 商品简介
 * productNumber 商品编号
 */
export interface FlowListingProductParams {
  productName: string;
  displayImageUrl: string;
  classificationId: string;
  productList: ProductWithDependencies[];
  userIdForListing: string;
  productDetailsList: ProductDetailsAdd[];
  productIntroduction: string;
  productNumber?: string;
}

/**
 * 出参明细:
 */
export interface FlowListingProductResults {
}

/**
 * 上架商品
 * @com.horsecoder.platform.mall/FLOW_LISTING_PRODUCT
 */
export const flowListingProduct = async (params: FlowListingProductParams): StandardPromise<FlowListingProductResults> => {
  return request('/mall-mall/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall/FLOW_LISTING_PRODUCT',
      params: { ...params },
    },
  });
};


export const flowListingProductFacade = async (params: FlowListingProductParams): Promise<FlowListingProductResults> => {
  const { data: { value } } =  await flowListingProduct(params);
  return value;
};