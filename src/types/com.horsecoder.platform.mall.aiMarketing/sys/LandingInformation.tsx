
/**
 * 落地信息
 */
export type LandingInformation = {

  /**
   * 落地信息ID
   */
  readonly id: string;

  /**
   * 姓名
   */
  name: string;

  /**
   * 电话
   */
  phone: string;

  /**
   * 邮箱
   */
  email: string;

  /**
   * 所属行业
   */
  industry: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
