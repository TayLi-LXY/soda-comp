
/**
 * 订阅套餐
 */
export type SubscriptionPackage = {

  /**
   * 套餐配置ID
   */
  id?: string;

  /**
   * 产品代码
   */
  productCode?: string;

  /**
   * 套餐名称
   */
  comboName?: string;

  /**
   * 套餐简介
   */
  description?: string;

  /**
   * 权益
   */
  benefits?: string;

  /**
   * 原价
   */
  originalPrice?: number;

  /**
   * 促销价格
   */
  promotionalPrice?: number;

  /**
   * 会员类型
   */
  memberType?: number;

  /**
   * 状态
   */
  status?: number;

  /**
   * 权重
   */
  weight?: number;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
