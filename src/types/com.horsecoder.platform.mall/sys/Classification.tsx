
/**
 * 分类
 */
export type Classification = {

  /**
   * 分类ID
   */
  readonly id: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 级别
   */
  level: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
