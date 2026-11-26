import { refreshPanelComponentActiveSubpanelState } from "@/src/models/Panel/action";

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnClickOpenIntelligentAgentPanelParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickOpenIntelligentAgentPanelResults {
}

/**
 * 点击打开智能体面板
 * FLOW_NODE_ON_CLICK_OPEN_INTELLIGENT_AGENT_PANEL
 * 唯一id: RightpMenu/FLOW_CODE_ON_CLICK_OPEN_INTELLIGENT_AGENT_PANEL
 */
export const flowCodeOnClickOpenIntelligentAgentPanel = async (params: FlowCodeOnClickOpenIntelligentAgentPanelParams): Promise<FlowCodeOnClickOpenIntelligentAgentPanelResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;

  // 设置活跃子面板为智能体，触发面板切换
  dispatch(refreshPanelComponentActiveSubpanelState('intelligentAgent'));

  // 结束流程
  return {}
};
