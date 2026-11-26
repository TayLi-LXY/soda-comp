import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ShoppingCartItem } from '@/flows/com.horsecoder.platform.mall/QueryShoppingCartProductListForMallUser/types/ShoppingCartItem';

/**
 * 入参明细:
 * mallAccountId 商城账户ID
 */
export interface FlowQueryShoppingCartProductListForMallUserParams {
  mallAccountId: string;
}

/**
 * 出参明细:
 * shoppingCartItemList 购物车产品列表
 */
export interface FlowQueryShoppingCartProductListForMallUserResults {
  shoppingCartItemList: ShoppingCartItem[];
}

/**
 * 查询商城用户购物车产品列表
 * @com.horsecoder.platform.mall/FLOW_QUERY_SHOPPING_CART_PRODUCT_LIST_FOR_MALL_USER
 */
export const flowQueryShoppingCartProductListForMallUser = async (params: FlowQueryShoppingCartProductListForMallUserParams): StandardPromise<FlowQueryShoppingCartProductListForMallUserResults> => {
  return request('/mall-mall/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall/FLOW_QUERY_SHOPPING_CART_PRODUCT_LIST_FOR_MALL_USER',
      params: { ...params },
    },
  });
};


export const flowQueryShoppingCartProductListForMallUserFacade = async (params: FlowQueryShoppingCartProductListForMallUserParams): Promise<FlowQueryShoppingCartProductListForMallUserResults> => {
  const { data: { value } } =  await flowQueryShoppingCartProductListForMallUser(params);
  return value;
};