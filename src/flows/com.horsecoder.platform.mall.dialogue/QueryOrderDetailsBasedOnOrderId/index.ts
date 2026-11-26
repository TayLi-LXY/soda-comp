import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 * orderNumber 订单号
 */
export interface FlowQueryOrderDetailsBasedOnOrderIdParams {
  orderNumber: string;
}

/**
 * 出参明细:
 * comboName 套餐名称
 * packageIntroduction 套餐简介
 * packageBenefits 套餐权益
 * packagePrice 套餐套餐价格
 * promotionAmount 促销金额
 * amountPayable 应付金额
 */
export interface FlowQueryOrderDetailsBasedOnOrderIdResults {
  comboName: string;
  packageIntroduction: string;
  packageBenefits: string;
  packagePrice: any;
  promotionAmount: any;
  amountPayable: any;
}

/**
 * 根据订单ID查询订单详情
 * @com.horsecoder.platform.mall.dialogue/FLOW_QUERY_ORDER_DETAILS_BASED_ON_ORDER_ID
 */
export const flowQueryOrderDetailsBasedOnOrderId = async (params: FlowQueryOrderDetailsBasedOnOrderIdParams): StandardPromise<FlowQueryOrderDetailsBasedOnOrderIdResults> => {
  return request('/mall-dialogue/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.platform.mall.dialogue/FLOW_QUERY_ORDER_DETAILS_BASED_ON_ORDER_ID',
      params: { ...params },
    },
  });
};


export const flowQueryOrderDetailsBasedOnOrderIdFacade = async (params: FlowQueryOrderDetailsBasedOnOrderIdParams): Promise<FlowQueryOrderDetailsBasedOnOrderIdResults> => {
  const { data: { value } } =  await flowQueryOrderDetailsBasedOnOrderId(params);
  return value;
};