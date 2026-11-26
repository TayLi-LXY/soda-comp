import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickSwitchDataButtonParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickSwitchDataButtonResults {
}

/**
 * 点击切换到数据按钮
 * @com.horsecoder.platform.mall.umi.chat/rightpMenu/FLOW_ON_CLICK_SWITCH_DATA_BUTTON
 */
export const flowOnClickSwitchDataButton = async (params: FlowOnClickSwitchDataButtonParams): Promise<FlowOnClickSwitchDataButtonResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/rightpMenu/FLOW_ON_CLICK_SWITCH_DATA_BUTTON', { ...params });
};
