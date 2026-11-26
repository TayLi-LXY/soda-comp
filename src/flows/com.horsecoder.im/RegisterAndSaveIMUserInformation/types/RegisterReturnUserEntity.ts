
/**
 * 注册返回用户实体
 */
export type RegisterReturnUserEntity = {

  /**
   * IM用户ID
   */
  id?: string;

  /**
   * 认证token
   */
  token: string;

  /**
   * 用户名
   */
  userName: string;

  /**
   * 账号
   */
  account: string;

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
