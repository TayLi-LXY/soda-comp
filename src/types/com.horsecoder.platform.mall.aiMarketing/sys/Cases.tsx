
/**
 * 案例
 */
export type Cases = {

  /**
   * 案例ID
   */
  readonly id: string;

  /**
   * 类型
   */
  type: string;

  /**
   * 视频url
   */
  videoUrl?: string;

  /**
   * 模型模板ID
   */
  modelTemplateId: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
