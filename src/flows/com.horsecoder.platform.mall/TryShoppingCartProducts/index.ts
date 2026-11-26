import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { ShoppingCartProduct } from '@/flows/com.horsecoder.platform.mall/TryShoppingCartProducts/types/ShoppingCartProduct';

/**
 * 入参明细:
 * shoppingCartProductList 购物车产品列表
 * mallAccountId 商城账户ID
 */
export interface FlowTryShoppingCartProductsParams {
  shoppingCartProductList: ShoppingCartProduct[];
  mallAccountId: string;
}

/**
 * 出参明细:
 */
export interface FlowTryShoppingCartProductsResults {
}

/**
 * 试用购物车产品
 * @com.horsecoder.platform.mall/FLOW_TRY_SHOPPING_CART_PRODUCTS
 */
export const flowTryShoppingCartProducts = async (params: FlowTryShoppingCartProductsParams): StandardPromise<FlowTryShoppingCartProductsResults> => {
  return request('/mall-mall/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall/FLOW_TRY_SHOPPING_CART_PRODUCTS',
      params: { ...params },
    },
  });
};


export const flowTryShoppingCartProductsFacade = async (params: FlowTryShoppingCartProductsParams): Promise<FlowTryShoppingCartProductsResults> => {
  const { data: { value } } =  await flowTryShoppingCartProducts(params);
  return value;
};