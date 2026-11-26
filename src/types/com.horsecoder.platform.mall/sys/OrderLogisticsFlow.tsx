
/**
 * 订单物流流水
 */
export type OrderLogisticsFlow = {

  /**
   * 订单物流流水ID
   */
  readonly id: string;

  /**
   * 订单物流ID
   */
  orderLogisticsId: string;

  /**
   * 流水信息
   */
  flowInformation: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
