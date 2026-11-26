import type { ProductSpecification } from '@/flows/com.horsecoder.platform.mall/FilterProductListIncludingSpecifications/types/ProductSpecification';

/**
 * 商品带规格
 */
export type CommodityWithSpecifications = {

  /**
   * 商品ID
   */
  id?: string;

  /**
   * 商品编号
   */
  productNumber: string;

  /**
   * 商品名称
   */
  productName: string;

  /**
   * 展示图片url
   */
  displayImageUrl: string;

  /**
   * 分类ID
   */
  classificationId: string;

  /**
   * 商品简介
   */
  productIntroduction?: string;

  /**
   * 商品规格列表
   */
  productSpecificationList: ProductSpecification[];

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
