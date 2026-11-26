
/**
 * 登录用户
 */
export type LoggedinUser = {

  /**
   * 用户ID
   */
  id: string;

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
   * 用户类型
   */
  userType: number;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
