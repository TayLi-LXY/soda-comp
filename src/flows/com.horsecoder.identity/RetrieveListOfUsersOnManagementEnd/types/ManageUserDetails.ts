
/**
 * 管理端用户详情
 */
export type ManageUserDetails = {

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
   * 密码
   */
  password?: string;

  /**
   * 盐值
   */
  salt?: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

  /**
   * git状态
   */
  gitStatus: string;

}
