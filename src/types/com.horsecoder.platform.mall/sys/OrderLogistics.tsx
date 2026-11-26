import type { OrderLogisticsProducts } from './OrderLogisticsProducts';
import type { OrderLogisticsFlow } from './OrderLogisticsFlow';

/**
 * 订单物流
 */
export type OrderLogistics = {

  /**
   * 订单物流ID
   */
  readonly id: string;

  /**
   * 订单ID
   */
  orderId: string;

  /**
   * 状态
   */
  status: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

  /**
   * 订单物流的ID关联的订单物流产品
   */
  orderLogisticsProducts?: OrderLogisticsProducts;

  /**
   * 订单物流的ID关联的订单物流流水列表
   */
  orderLogisticsFlowList?: OrderLogisticsFlow[];

}
