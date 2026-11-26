import { refreshPanelComponentActiveSubpanelState } from "@/src/models/Panel/action";

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowCodeOnClickSwitchDataButtonParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickSwitchDataButtonResults {
}

/**
 * 点击切换到数据按钮
 * FLOW_NODE_ON_CLICK_SWITCH_DATA_BUTTON
 * 唯一id: RightpMenu/FLOW_CODE_ON_CLICK_SWITCH_DATA_BUTTON
 */
export const flowCodeOnClickSwitchDataButton = async (params: FlowCodeOnClickSwitchDataButtonParams): Promise<FlowCodeOnClickSwitchDataButtonResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;

  dispatch(refreshPanelComponentActiveSubpanelState('data'));
  // 结束流程
  return {}
};
