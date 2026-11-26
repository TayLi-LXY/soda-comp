import type { TaskSpan } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/OpenTask/types/TaskSpan';
import type { LevelRoute } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/OpenTask/types/LevelRoute';

/**
 * 层级详情
 */
export type LevelDetail = {

  /**
   * 层级
   */
  level: number;

  /**
   * 层级节点列表
   */
  levelVertexes: string[];

  /**
   * 层级spanMap
   */
  levelSpans: any;

  /**
   * 层级路由Map
   */
  levelRoutes: any;

}
