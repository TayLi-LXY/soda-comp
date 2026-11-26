
/**
 * 任务实体
 */
export type TaskEntity = {

  /**
   * 任务ID
   */
  id: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 状态
   */
  status?: number;

  /**
   * 用户ID
   */
  userId?: string;

  /**
   * 组织ID
   */
  organizeId?: string;

  /**
   * 执行图ID
   */
  graphId?: string;

  /**
   * 更新时间
   */
  gmtUpdate: number;

  /**
   * 创建时间
   */
  gmtCreate: number;

}
