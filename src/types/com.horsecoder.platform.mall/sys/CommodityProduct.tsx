
/**
 * 商品产品
 */
export type CommodityProduct = {

  /**
   * 商品产品ID
   */
  readonly id: string;

  /**
   * 商品ID
   */
  commodityId: string;

  /**
   * 产品ID
   */
  productId: string;

  /**
   * 图片url
   */
  imageUrl?: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
