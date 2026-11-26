import type { Commodity } from './Commodity';

/**
 * 商品评价
 */
export type CommodityEvaluation = {

  /**
   * 商品评价ID
   */
  readonly id: string;

  /**
   * 商品ID
   */
  commodityId: string;

  /**
   * 内容
   */
  content: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

  /**
   * 商品评价的商品ID关联的商品
   */
  commodity?: Commodity;

}
