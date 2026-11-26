import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { PurchasedProducts } from '@/flows/com.horsecoder.market/ObtainListOfPurchasedProductsForAccount/types/PurchasedProducts';
import type { ShoppingCartItem } from '@/flows/com.horsecoder.platform.mall/QueryShoppingCartProductListForMallUser/types/ShoppingCartItem';

/**
 * 入参明细:
 * mallAccountId 商城账户ID
 */
export interface FlowQueryShoppingCartProductListAndPurchasedProductListForMallUserParams {
  mallAccountId: string;
}

/**
 * 出参明细:
 * purchasedProductsList 已购产品列表
 * shoppingCartItemList 购物车产品列表
 */
export interface FlowQueryShoppingCartProductListAndPurchasedProductListForMallUserResults {
  purchasedProductsList: PurchasedProducts[];
  shoppingCartItemList: ShoppingCartItem[];
}

/**
 * 查询商城用户购物车产品列表和已购产品列表
 * @com.horsecoder.platform.mall/FLOW_QUERY_SHOPPING_CART_PRODUCT_LIST_AND_PURCHASED_PRODUCT_LIST_FOR_MALL_USER
 */
export const flowQueryShoppingCartProductListAndPurchasedProductListForMallUser = async (params: FlowQueryShoppingCartProductListAndPurchasedProductListForMallUserParams): StandardPromise<FlowQueryShoppingCartProductListAndPurchasedProductListForMallUserResults> => {
  return request('/mall-mall/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall/FLOW_QUERY_SHOPPING_CART_PRODUCT_LIST_AND_PURCHASED_PRODUCT_LIST_FOR_MALL_USER',
      params: { ...params },
    },
  });
};


export const flowQueryShoppingCartProductListAndPurchasedProductListForMallUserFacade = async (params: FlowQueryShoppingCartProductListAndPurchasedProductListForMallUserParams): Promise<FlowQueryShoppingCartProductListAndPurchasedProductListForMallUserResults> => {
  const { data: { value } } =  await flowQueryShoppingCartProductListAndPurchasedProductListForMallUser(params);
  return value;
};