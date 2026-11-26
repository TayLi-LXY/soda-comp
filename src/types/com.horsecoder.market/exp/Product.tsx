
/**
 * 产品
 */
export type Product = {

  /**
   * 产品ID
   */
  readonly id: string;

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
   * 库存
   */
  inventory: number;

  /**
   * 锁单库存
   */
  lockOrderInventory: number;

  /**
   * 是否上架
   */
  ifListed: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
