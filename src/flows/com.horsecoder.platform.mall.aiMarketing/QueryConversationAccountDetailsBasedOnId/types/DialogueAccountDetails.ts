
/**
 * 对话账户详情
 */
export type DialogueAccountDetails = {

  /**
   * 对话账户ID
   */
  id?: string;

  /**
   * 用户头像
   */
  userProfilePicture?: string;

  /**
   * 用户姓名
   */
  userName: string;

  /**
   * 用户类型
   */
  customerType?: number;

  /**
   * 用户手机号
   */
  userMobilePhoneNumber: string;

  /**
   * 用户昵称
   */
  userNickname?: string;

  /**
   * 邮箱
   */
  email?: string;

  /**
   * 密码
   */
  password?: string;

  /**
   * 盐值
   */
  saltValue?: string;

  /**
   * 更新时间
   */
  gmtUpdate?: number;

  /**
   * 创建时间
   */
  gmtCreate?: number;

}
