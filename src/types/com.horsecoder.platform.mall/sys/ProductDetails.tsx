
/**
 * 商品详情
 */
export type ProductDetails = {

  /**
   * 商品详情ID
   */
  readonly id: string;

  /**
   * 商品ID
   */
  commodityId: string;

  /**
   * 详情类型
   */
  detailType: number;

  /**
   * 详情内容
   */
  detailContent: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
