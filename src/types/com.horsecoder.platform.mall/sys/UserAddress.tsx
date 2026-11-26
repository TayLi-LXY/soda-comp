
/**
 * 用户地址
 */
export type UserAddress = {

  /**
   * 用户地址ID
   */
  readonly id: string;

  /**
   * 用户ID
   */
  userId: string;

  /**
   * 收件人
   */
  receiver: string;

  /**
   * 所在地区
   */
  location: string;

  /**
   * 详细地址
   */
  detailedAddress: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
