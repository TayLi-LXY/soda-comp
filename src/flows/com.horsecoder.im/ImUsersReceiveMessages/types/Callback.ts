
/**
 * 回调
 */
export type Callback = {

  /**
   * 回调类型
   */
  callbackType: string[];

  /**
   * 传输类型
   */
  transportType: string;

  /**
   * 目标
   */
  target: string;

  /**
   * 是否启用
   */
  enabled: any;

  /**
   * payload模板
   */
  payloadTemplate?: any;

}
