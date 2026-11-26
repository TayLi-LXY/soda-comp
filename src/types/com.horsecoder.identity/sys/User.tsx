
/**
 * 用户
 */
export type User = {

  /**
   * 用户ID
   */
  readonly id: string;

  /**
   * 用户名
   */
  userName: string;

  /**
   * 昵称
   */
  nickname: string;

  /**
   * 手机号
   */
  phone: string;

  /**
   * 邮箱
   */
  email: string;

  /**
   * 密码
   */
  password?: string;

  /**
   * 盐值
   */
  readonly salt?: string;

  /**
   * 用户类型
   */
  userType: number;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
