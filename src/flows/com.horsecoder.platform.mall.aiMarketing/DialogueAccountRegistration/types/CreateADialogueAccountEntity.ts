
/**
 * 创建对话账户实体
 */
export type CreateADialogueAccountEntity = {

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
  customerType?: string;

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

}
