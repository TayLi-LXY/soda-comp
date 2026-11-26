import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PurchasedProducts } from '@/flows/com.horsecoder.market/ObtainListOfPurchasedProductsForAccount/types/PurchasedProducts';

/**
 * 入参明细:
 * accountId 账户ID
 */
export interface FlowObtainListOfPurchasedProductsForAccountParams {
  accountId: string;
}

/**
 * 出参明细:
 * purchasedProductsList 已购产品列表
 */
export interface FlowObtainListOfPurchasedProductsForAccountResults {
  purchasedProductsList: PurchasedProducts[];
}

/**
 * 获取账户已购产品列表
 * @com.horsecoder.market/FLOW_OBTAIN_LIST_OF_PURCHASED_PRODUCTS_FOR_ACCOUNT
 */
export const flowObtainListOfPurchasedProductsForAccount = async (params: FlowObtainListOfPurchasedProductsForAccountParams): StandardPromise<FlowObtainListOfPurchasedProductsForAccountResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_OBTAIN_LIST_OF_PURCHASED_PRODUCTS_FOR_ACCOUNT',
      params: { ...params },
    },
  });
};


export const flowObtainListOfPurchasedProductsForAccountFacade = async (params: FlowObtainListOfPurchasedProductsForAccountParams): Promise<FlowObtainListOfPurchasedProductsForAccountResults> => {
  const { data: { value } } =  await flowObtainListOfPurchasedProductsForAccount(params);
  return value;
};