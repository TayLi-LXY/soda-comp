
/**
 * 折扣
 */
export type Discount = {

  /**
   * 折扣ID
   */
  readonly id: string;

  /**
   * 折扣名称
   */
  discountName: string;

  /**
   * 折扣类型
   */
  discountType: number;

  /**
   * 折扣价格
   */
  price: number;

  /**
   * 折扣详情
   */
  detail?: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
