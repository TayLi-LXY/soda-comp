
/**
 * 数据智能账户
 */
export type DataSmartAccountMember = {

  /**
   * 数据智能账户会员ID
   */
  id?: string;

  /**
   * 用户ID
   */
  userId?: string;

  /**
   * 会员类型
   */
  memberType?: number;

  /**
   * 到期时间
   */
  expirationDate?: number;

  /**
   * 生效时间
   */
  effectiveTime?: number;

  /**
   * 权重
   */
  weight?: number;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
