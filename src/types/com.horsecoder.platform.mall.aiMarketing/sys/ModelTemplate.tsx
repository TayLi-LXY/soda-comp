import type { ModelTemplateScene } from './ModelTemplateScene';

/**
 * 模型模板
 */
export type ModelTemplate = {

  /**
   * 模型模板ID
   */
  readonly id: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 更新时间
   */
  readonly gmtUpdate: number;

  /**
   * 创建时间
   */
  readonly gmtCreate: number;

  /**
   * 模型模板的ID关联的模型模板场景列表
   */
  modelTemplateSceneList?: ModelTemplateScene[];

}
