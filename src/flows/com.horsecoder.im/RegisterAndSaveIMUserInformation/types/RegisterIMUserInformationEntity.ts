
/**
 * 注册IM用户信息实体
 */
export type RegisterIMUserInformationEntity = {

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
   * 密码
   */
  password: string;

  /**
   * 账号
   */
  account: string;

  /**
   * 用户类型
   */
  userType: number;

}
