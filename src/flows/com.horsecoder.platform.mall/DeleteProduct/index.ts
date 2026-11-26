import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * productNumber 商品编号
 */
export interface FlowDeleteProductParams {
  productNumber: string;
}

/**
 * 出参明细:
 */
export interface FlowDeleteProductResults {
}

/**
 * 删除商品
 * @com.horsecoder.platform.mall/FLOW_DELETE_PRODUCT
 */
export const flowDeleteProduct = async (params: FlowDeleteProductParams): StandardPromise<FlowDeleteProductResults> => {
  return request('/mall-mall/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall/FLOW_DELETE_PRODUCT',
      params: { ...params },
    },
  });
};


export const flowDeleteProductFacade = async (params: FlowDeleteProductParams): Promise<FlowDeleteProductResults> => {
  const { data: { value } } =  await flowDeleteProduct(params);
  return value;
};