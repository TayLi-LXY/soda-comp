import type { FlowParameterStandard } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/GetTbotFlowInformationList/types/FlowParameterStandard';
import type { ModelStandard } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/GetTbotFlowInformationList/types/ModelStandard';

/**
 * 流程标准
 */
export type FlowStandard = {

  /**
   * id
   */
  id: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 关键词
   */
  keywords: string[];

  /**
   * 用户手册
   */
  manual: string;

  /**
   * 描述
   */
  description: string;

  /**
   * 入参列表
   */
  params: FlowParameterStandard[];

  /**
   * 出参列表
   */
  results: FlowParameterStandard[];

  /**
   * 模型列表
   */
  models: ModelStandard[];

  /**
   * 引用
   */
  reference?: string;

  /**
   * 引用代码
   */
  referenceCode?: string;

  /**
   * 类型
   */
  type?: string;

}
