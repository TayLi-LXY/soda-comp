import type { CommodityProduct } from './CommodityProduct';
import type { CommodityEvaluation } from './CommodityEvaluation';
import type { Classification } from './Classification';
import type { ProductDetails } from './ProductDetails';

/**
 * 商品
 */
export type Commodity = {

  /**
   * 商品ID
   */
  readonly id: string;

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

  /**
   * 商品的ID关联的商品产品列表
   */
  commodityProductList?: CommodityProduct[];

  /**
   * 商品的分类ID关联的分类
   */
  classification?: Classification;

  /**
   * 商品的ID关联的商品评价列表
   */
  commodityEvaluationList?: CommodityEvaluation[];

  /**
   * 商品的ID关联的商品详情列表
   */
  productDetailsList?: ProductDetails[];

}
