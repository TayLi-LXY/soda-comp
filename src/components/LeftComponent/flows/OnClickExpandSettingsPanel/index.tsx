import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickExpandSettingsPanelParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickExpandSettingsPanelResults {
}

/**
 * 点击展开设置面板
 * @com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_EXPAND_SETTINGS_PANEL
 */
export const flowOnClickExpandSettingsPanel = async (params: FlowOnClickExpandSettingsPanelParams): Promise<FlowOnClickExpandSettingsPanelResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_EXPAND_SETTINGS_PANEL', { ...params });
};
