import type { ModelJsonModel } from '@/flows/com.horsecoder.model/BatchCreationOfModelFiles/types/ModelJsonModel';

/**
 * 模型文件含旧模型
 */
export type ModelJsonContainsOld = {

  /**
   * ID
   */
  id: string;

  /**
   * 模型ID
   */
  modelId: string;

  /**
   * 子模型ID
   */
  subModelId: string;

  /**
   * 模型文件类型
   */
  type: string;

  /**
   * 子模型文件类型
   */
  subType: string;

  /**
   * 子模型标题
   */
  title?: string;

  /**
   * 子模型名称
   */
  name: string;

  /**
   * 文件锁定人
   */
  lockedBy?: string;

  /**
   * 模型文件
   */
  jsonPath: string;

  /**
   * 模型应用ID列表
   */
  refs?: string[];

  /**
   * 需求文件url
   */
  demandPath?: string;

  /**
   * 旧模型文件
   */
  oldModelJson?: ModelJsonModel;

  /**
   * 组织ID
   */
  organizeId?: string;

  /**
   * 创建人ID
   */
  creatorId?: string;

  /**
   * 压缩路径
   */
  zipPath?: string;

}
