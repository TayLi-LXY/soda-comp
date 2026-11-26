
/**
 * 品类
 */
export type Category = {

  /**
   * 品类ID
   */
  readonly id: string;

  /**
   * 品类名称
   */
  categoryName: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
