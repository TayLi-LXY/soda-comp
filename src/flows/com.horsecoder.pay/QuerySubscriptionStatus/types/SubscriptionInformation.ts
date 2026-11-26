
/**
 * 订阅信息
 */
export type SubscriptionInformation = {

  /**
   * 用户订阅ID
   */
  id?: string;

  /**
   * 关联账户ID
   */
  accountId?: string;

  /**
   * 支付类型
   */
  payType?: number;

  /**
   * 状态
   */
  status?: number;

  /**
   * 第三方协议号
   */
  agreementNumber?: string;

  /**
   * 金额
   */
  price?: number;

  /**
   * 下次扣费日期
   */
  nextBillDate?: number;

  /**
   * 上次扣费订单号
   */
  lastBillOrderNumber?: string;

  /**
   * 连续失败次数
   */
  failCount?: number;

  /**
   * 上次成功扣费时间
   */
  lastBillDate?: number;

  /**
   * 试用期结束时间
   */
  trialEnd?: number;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
