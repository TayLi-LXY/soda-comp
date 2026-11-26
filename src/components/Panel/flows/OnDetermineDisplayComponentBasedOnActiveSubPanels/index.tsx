import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * activeSubpanel 活跃子面板
 */
export interface FlowOnDetermineDisplayComponentBasedOnActiveSubPanelsParams {
  setter: any;
  dispatch: any;
  activeSubpanel: any;
}

/**
 * 出参明细:
 */
export interface FlowOnDetermineDisplayComponentBasedOnActiveSubPanelsResults {
}

/**
 * 根据活跃子面板决定展示组件
 * @com.horsecoder.platform.mall.umi.chat/panel/FLOW_ON_DETERMINE_DISPLAY_COMPONENT_BASED_ON_ACTIVE_SUB_PANELS
 */
export const flowOnDetermineDisplayComponentBasedOnActiveSubPanels = async (params: FlowOnDetermineDisplayComponentBasedOnActiveSubPanelsParams): Promise<FlowOnDetermineDisplayComponentBasedOnActiveSubPanelsResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/panel/FLOW_ON_DETERMINE_DISPLAY_COMPONENT_BASED_ON_ACTIVE_SUB_PANELS', { ...params });
};
