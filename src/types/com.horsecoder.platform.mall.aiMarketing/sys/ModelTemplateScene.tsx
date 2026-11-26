
/**
 * 模型模板场景
 */
export type ModelTemplateScene = {

  /**
   * 模型模板场景ID
   */
  readonly id: string;

  /**
   * 模型模板ID
   */
  modelTemplateId: string;

  /**
   * 模型场景ID
   */
  modelSceneId: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

}
