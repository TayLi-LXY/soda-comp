
/**
 * 流程参数标准
 */
export type FlowParameterStandard = {

  /**
   * 标题
   */
  title: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 类型
   */
  type: string;

  /**
   * 是否为空
   */
  notnull: number;

  /**
   * 描述
   */
  description: string;

  /**
   * 默认值
   */
  defaultValue?: any;

  /**
   * 示例值
   */
  exampleValue?: string;

  /**
   * tbottype
   */
  tbottype?: string;

  /**
   * value
   */
  value?: string;

  /**
   * 可见
   */
  visible: any;

}
