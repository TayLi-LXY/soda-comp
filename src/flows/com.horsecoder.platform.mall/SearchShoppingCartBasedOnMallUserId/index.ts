import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { Cart } from '@/types/com.horsecoder.platform.mall/sys/Cart';

/**
 * 入参明细:
 * mallAccountId 商城账户ID
 */
export interface FlowSearchShoppingCartBasedOnMallUserIdParams {
  mallAccountId: string;
}

/**
 * 出参明细:
 * cart 购物车
 */
export interface FlowSearchShoppingCartBasedOnMallUserIdResults {
  cart: Cart;
}

/**
 * 根据商城用户ID查询购物车
 * @com.horsecoder.platform.mall/FLOW_SEARCH_SHOPPING_CART_BASED_ON_MALL_USER_ID
 */
export const flowSearchShoppingCartBasedOnMallUserId = async (params: FlowSearchShoppingCartBasedOnMallUserIdParams): StandardPromise<FlowSearchShoppingCartBasedOnMallUserIdResults> => {
  return request('/mall-mall/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall/FLOW_SEARCH_SHOPPING_CART_BASED_ON_MALL_USER_ID',
      params: { ...params },
    },
  });
};


export const flowSearchShoppingCartBasedOnMallUserIdFacade = async (params: FlowSearchShoppingCartBasedOnMallUserIdParams): Promise<FlowSearchShoppingCartBasedOnMallUserIdResults> => {
  const { data: { value } } =  await flowSearchShoppingCartBasedOnMallUserId(params);
  return value;
};