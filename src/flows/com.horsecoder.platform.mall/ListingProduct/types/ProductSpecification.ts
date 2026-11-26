
/**
 * 商品规格
 */
export type ProductSpecification = {

  /**
   * 产品编号
   */
  productNumber?: string;

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
   * 品类ID
   */
  categoryId?: string;

  /**
   * 图片Url
   */
  imageUrl?: string;

  /**
   * 库存
   */
  inventory: number;

}
