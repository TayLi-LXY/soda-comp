import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * setPanelVisibleControls 设置面板可见控制
 */
export interface FlowOnClickOpenSettingsPanelParams {
  setter: any;
  dispatch: any;
  setPanelVisibleControls: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOpenSettingsPanelResults {
}

/**
 * 点击打开设置面板
 * @com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_OPEN_SETTINGS_PANEL
 */
export const flowOnClickOpenSettingsPanel = async (params: FlowOnClickOpenSettingsPanelParams): Promise<FlowOnClickOpenSettingsPanelResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_OPEN_SETTINGS_PANEL', { ...params });
};
