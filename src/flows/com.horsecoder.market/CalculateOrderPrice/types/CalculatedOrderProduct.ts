import type { OrderProductWithProductInfo } from '@/flows/com.horsecoder.market/CalculateOrderPrice/types/OrderProductWithProductInfo';
import type { OrderProductDiscounts } from '@/flows/com.horsecoder.market/CalculateOrderPrice/types/OrderProductDiscounts';

/**
 * 计算后订单产品
 */
export type CalculatedOrderProduct = {

  /**
   * 订单产品带产品信息
   */
  orderProductWithProductInfo: OrderProductWithProductInfo;

  /**
   * 订单产品优惠列表
   */
  orderProductDiscountList?: OrderProductDiscounts[];

}
