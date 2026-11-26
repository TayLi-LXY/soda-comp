
/**
 * 订单产品带产品信息
 */
export type OrderProductWithProductInfo = {

  /**
   * 订单产品ID
   */
  id?: string;

  /**
   * 订单ID
   */
  orderId?: string;

  /**
   * 产品ID
   */
  productId: string;

  /**
   * 产品名称
   */
  productName: string;

  /**
   * 原始单价
   */
  originalUnitPrice: number;

  /**
   * 产品数量
   */
  number: number;

  /**
   * 原价
   */
  originalPrice: number;

  /**
   * 实付
   */
  actualPayment?: number;

  /**
   * 上架账户ID
   */
  listingAccountId?: string;

  /**
   * 品类ID
   */
  categoryId?: string;

  /**
   * 产品类型
   */
  productType: string;

  /**
   * 图片url
   */
  imageUrl?: string;

}
