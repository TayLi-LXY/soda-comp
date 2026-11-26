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
export interface FlowVerifyOrderProductsAndCalculateOrderPricesParams {
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
export interface FlowVerifyOrderProductsAndCalculateOrderPricesResults {
  calculatedOrderProductList: CalculatedOrderProduct[];
  totalDiscountAmount: any;
  originalTotalAmount: any;
  actualTotalAmount: any;
  usedCouponCouponTemplateList: CouponCouponTemplate[];
}

/**
 * 校验订单产品计算订单价格
 * @com.horsecoder.market/FLOW_VERIFY_ORDER_PRODUCTS_AND_CALCULATE_ORDER_PRICES
 */
export const flowVerifyOrderProductsAndCalculateOrderPrices = async (params: FlowVerifyOrderProductsAndCalculateOrderPricesParams): StandardPromise<FlowVerifyOrderProductsAndCalculateOrderPricesResults> => {
  return request('/horsecoder-market/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.market/FLOW_VERIFY_ORDER_PRODUCTS_AND_CALCULATE_ORDER_PRICES',
      params: { ...params },
    },
  });
};


export const flowVerifyOrderProductsAndCalculateOrderPricesFacade = async (params: FlowVerifyOrderProductsAndCalculateOrderPricesParams): Promise<FlowVerifyOrderProductsAndCalculateOrderPricesResults> => {
  const { data: { value } } =  await flowVerifyOrderProductsAndCalculateOrderPrices(params);
  return value;
};