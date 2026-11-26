import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { CommodityWithSpecifications } from '@/flows/com.horsecoder.platform.mall/FilterProductListIncludingSpecifications/types/CommodityWithSpecifications';

/**
 * 入参明细:
 * productType 商品类型
 * ifListed 商品上下架状态
 * productNameLike 商品名称like
 */
export interface FlowFilterProductListIncludingSpecificationsParams {
  productType?: string;
  ifListed?: number;
  productNameLike?: string;
}

/**
 * 出参明细:
 * commodityList 商品列表
 */
export interface FlowFilterProductListIncludingSpecificationsResults {
  commodityList: CommodityWithSpecifications[];
}

/**
 * 筛选商品列表（含规格）
 * @com.horsecoder.platform.mall/FLOW_FILTER_PRODUCT_LIST_INCLUDING_SPECIFICATIONS
 */
export const flowFilterProductListIncludingSpecifications = async (params: FlowFilterProductListIncludingSpecificationsParams): StandardPromise<FlowFilterProductListIncludingSpecificationsResults> => {
  return request('/mall-mall/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall/FLOW_FILTER_PRODUCT_LIST_INCLUDING_SPECIFICATIONS',
      params: { ...params },
    },
  });
};


export const flowFilterProductListIncludingSpecificationsFacade = async (params: FlowFilterProductListIncludingSpecificationsParams): Promise<FlowFilterProductListIncludingSpecificationsResults> => {
  const { data: { value } } =  await flowFilterProductListIncludingSpecifications(params);
  return value;
};