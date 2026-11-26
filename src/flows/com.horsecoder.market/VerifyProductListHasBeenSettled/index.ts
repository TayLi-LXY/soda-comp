import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ProductWithQuantity } from '@/flows/com.horsecoder.market/VerifyProductListHasBeenSettled/types/ProductWithQuantity';

/**
 * 入参明细:
 * accountId 账户ID
 * productWithQuantityList 产品带数量列表
 */
export interface FlowVerifyProductListHasBeenSettledParams {
  accountId: string;
  productWithQuantityList: ProductWithQuantity[];
}

/**
 * 出参明细:
 * ifSettlementCompleted 是否结算完成
 * listOfUnsettledProductsWithQuantity 未结算产品带数量列表
 */
export interface FlowVerifyProductListHasBeenSettledResults {
  ifSettlementCompleted: any;
  listOfUnsettledProductsWithQuantity?: ProductWithQuantity[];
}

/**
 * 校验产品列表是否结算完成
 * @com.horsecoder.market/FLOW_VERIFY_PRODUCT_LIST_HAS_BEEN_SETTLED
 */
export const flowVerifyProductListHasBeenSettled = async (params: FlowVerifyProductListHasBeenSettledParams): StandardPromise<FlowVerifyProductListHasBeenSettledResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_VERIFY_PRODUCT_LIST_HAS_BEEN_SETTLED',
      params: { ...params },
    },
  });
};


export const flowVerifyProductListHasBeenSettledFacade = async (params: FlowVerifyProductListHasBeenSettledParams): Promise<FlowVerifyProductListHasBeenSettledResults> => {
  const { data: { value } } =  await flowVerifyProductListHasBeenSettled(params);
  return value;
};