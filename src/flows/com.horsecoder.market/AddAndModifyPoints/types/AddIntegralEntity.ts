
/**
 * 新增积分实体
 */
export type AddIntegralEntity = {

  /**
   * 积分ID
   */
  id?: string;

  /**
   * 用户ID
   */
  userId?: string;

  /**
   * 用户昵称
   */
  userNickname?: string;

  /**
   * 手机号
   */
  cellphoneNumber?: string;

  /**
   * 邮箱
   */
  email?: string;

  /**
   * 积分值
   */
  integralValue?: number;

  /**
   * 套餐ID
   */
  packageId?: string;

  /**
   * 套餐类型
   */
  packageType?: string;

  /**
   * 套餐名称
   */
  packageName?: string;

  /**
   * 有效期
   */
  periodOfValidity?: string;

  /**
   * 过期时间
   */
  expirationDate?: number;

}
