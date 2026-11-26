
/**
 * 大模型消息
 */
export type Message = {

  /**
   * 角色
   */
  role: string;

  /**
   * 内容
   */
  content: string;

  /**
   * token
   */
  token: number;

  /**
   * cost
   */
  cost: number;

}
