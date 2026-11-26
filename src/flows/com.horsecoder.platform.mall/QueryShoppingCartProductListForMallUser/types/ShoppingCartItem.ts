import type { ProductInShoppingCart } from '@/flows/com.horsecoder.platform.mall/QueryShoppingCartProductListForMallUser/types/ProductInShoppingCart';

/**
 * 购物车单项
 */
export type ShoppingCartItem = {

  /**
   * 购物车中产品
   */
  productInShoppingCart: ProductInShoppingCart;

  /**
   * 数量
   */
  quantity: number;

}
