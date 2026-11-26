import type { Message } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/OpenTask/types/Message';
import type { Parameter } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/OpenTask/types/Parameter';

/**
 * 任务span
 */
export type TaskSpan = {

  /**
   * 任务
   */
  task: string;

  /**
   * 消息列表
   */
  messages: Message[];

  /**
   * 入参列表
   */
  params: Parameter[];

  /**
   * 出参列表
   */
  results: Parameter[];

  /**
   * span列表
   */
  spans: string[];

  /**
   * 任务状态
   */
  status: number;

  /**
   * token
   */
  token: number;

  /**
   * cost
   */
  cost: number;

  /**
   * time
   */
  time: number;

  /**
   * 类型
   */
  type: string;

}
