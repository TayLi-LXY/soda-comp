import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnInitializeIntelligentAgentListParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeIntelligentAgentListResults {
}

/**
 * 初始化智能体列表
 * @com.horsecoder.platform.mall.umi.chat/intelligentAgentSelectComponent/FLOW_ON_INITIALIZE_INTELLIGENT_AGENT_LIST
 */
export const flowOnInitializeIntelligentAgentList = async (params: FlowOnInitializeIntelligentAgentListParams): Promise<FlowOnInitializeIntelligentAgentListResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/intelligentAgentSelectComponent/FLOW_ON_INITIALIZE_INTELLIGENT_AGENT_LIST', { ...params });
};
