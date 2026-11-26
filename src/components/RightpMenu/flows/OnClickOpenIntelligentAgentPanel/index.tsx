import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickOpenIntelligentAgentPanelParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOpenIntelligentAgentPanelResults {
}

/**
 * 点击打开智能体面板
 * @com.horsecoder.platform.mall.umi.chat/rightpMenu/FLOW_ON_CLICK_OPEN_INTELLIGENT_AGENT_PANEL
 */
export const flowOnClickOpenIntelligentAgentPanel = async (params: FlowOnClickOpenIntelligentAgentPanelParams): Promise<FlowOnClickOpenIntelligentAgentPanelResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/rightpMenu/FLOW_ON_CLICK_OPEN_INTELLIGENT_AGENT_PANEL', { ...params });
};
