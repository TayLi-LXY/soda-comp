
/**
 * 空间模型
 */
export type SpaceModel = {

  /**
   * 空间ID
   */
  id: string;

  /**
   * 创建人ID
   */
  creatorId: string;

  /**
   * 空间类型
   */
  type: string;

  /**
   * 空间标题
   */
  title: string;

  /**
   * 空间名称
   */
  name: string;

  /**
   * 行业
   */
  businessType?: string;

  /**
   * 业务场景
   */
  businessScenario?: string;

  /**
   * 业务规模
   */
  businessScale?: string;

  /**
   * 是否完成填写
   */
  finished: number;

  /**
   * 组织ID
   */
  organizeId: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
