
/**
 * 用户筛选
 */
export type UserFiltering = {

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
   * 用户名like
   */
  userNameLike?: string;

  /**
   * 昵称like
   */
  nicknameLike?: string;

  /**
   * 手机号like
   */
  phoneLike?: string;

  /**
   * page
   */
  page?: any;

  /**
   * rows
   */
  rows?: number;

}
