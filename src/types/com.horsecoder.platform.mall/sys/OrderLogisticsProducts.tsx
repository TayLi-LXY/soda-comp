
/**
 * 订单物流产品
 */
export type OrderLogisticsProducts = {

  /**
   * 订单物流产品ID
   */
  readonly id: string;

  /**
   * 订单物流ID
   */
  orderLogisticsId: string;

  /**
   * 订单产品ID
   */
  orderProductId: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
