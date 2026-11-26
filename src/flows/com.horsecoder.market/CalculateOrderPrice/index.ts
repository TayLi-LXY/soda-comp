import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';
import type { OrderProductWithProductInfo } from '@/flows/com.horsecoder.market/CalculateOrderPrice/types/OrderProductWithProductInfo';
import type { CalculatedOrderProduct } from '@/flows/com.horsecoder.market/CalculateOrderPrice/types/CalculatedOrderProduct';
import type { CouponCouponTemplate } from '@/types/com.horsecoder.market/FLOW_OBTAIN_ACCOUNT_COUPONS_BASED_ON_AVAILABLE_COUPON_TEMPLATES/CouponCouponTemplate';

/**
 * 入参明细:
 * orderProductList 订单产品列表
 * accountId 账户ID
 */
export interface FlowCalculateOrderPriceParams {
  orderProductList: OrderProductWithProductInfo[];
  accountId: string;
}

/**
 * 出参明细:
 * calculatedOrderProductList 计算后订单产品列表
 * totalDiscountAmount 总优惠金额
 * originalTotalAmount 原始总金额
 * actualTotalAmount 实付总金额
 * usedCouponCouponTemplateList 使用过的优惠券优惠券模板列表
 */
export interface FlowCalculateOrderPriceResults {
  calculatedOrderProductList: CalculatedOrderProduct[];
  totalDiscountAmount: any;
  originalTotalAmount: any;
  actualTotalAmount: any;
  usedCouponCouponTemplateList: CouponCouponTemplate[];
}

/**
 * 计算订单价格
 * @com.horsecoder.market/FLOW_CALCULATE_ORDER_PRICE
 */
export const flowCalculateOrderPrice = async (params: FlowCalculateOrderPriceParams): StandardPromise<FlowCalculateOrderPriceResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_CALCULATE_ORDER_PRICE',
      params: { ...params },
    },
  });
};


export const flowCalculateOrderPriceFacade = async (params: FlowCalculateOrderPriceParams): Promise<FlowCalculateOrderPriceResults> => {
  const { data: { value } } =  await flowCalculateOrderPrice(params);
  return value;
};