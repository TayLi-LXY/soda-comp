
/**
 * 已购产品
 */
export type PurchasedProducts = {

  /**
   * 产品ID
   */
  id?: string;

  /**
   * 产品编号
   */
  productNumber: string;

  /**
   * 产品名称
   */
  productName: string;

  /**
   * 产品购买类型
   */
  periodType: number;

  /**
   * 产品价格
   */
  price: number;

  /**
   * 产品详情
   */
  detail: string;

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
   * 图片Url
   */
  imageUrl?: string;

  /**
   * 数量
   */
  quantity: number;

}
