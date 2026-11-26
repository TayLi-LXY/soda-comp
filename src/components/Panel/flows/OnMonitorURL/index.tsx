import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * previewUrlOfSelectedSchema 选中的schema预览Url
 */
export interface FlowOnMonitorURLParams {
  setter: any;
  dispatch: any;
  previewUrlOfSelectedSchema: any;
}

/**
 * 出参明细:
 */
export interface FlowOnMonitorURLResults {
}

/**
 * 监听Url
 * @com.horsecoder.platform.mall.umi.chat/panel/FLOW_ON_MONITOR_U_R_L
 */
export const flowOnMonitorURL = async (params: FlowOnMonitorURLParams): Promise<FlowOnMonitorURLResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/panel/FLOW_ON_MONITOR_U_R_L', { ...params });
};
