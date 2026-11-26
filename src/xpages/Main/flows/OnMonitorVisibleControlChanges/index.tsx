import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * visibleControlSignalData 可见控制信号数据
 */
export interface FlowOnMonitorVisibleControlChangesParams {
  setter: any;
  dispatch: any;
  visibleControlSignalData: any;
}

/**
 * 出参明细:
 */
export interface FlowOnMonitorVisibleControlChangesResults {
}

/**
 * 监听可见控制变化
 * @com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_MONITOR_VISIBLE_CONTROL_CHANGES
 */
export const flowOnMonitorVisibleControlChanges = async (params: FlowOnMonitorVisibleControlChangesParams): Promise<FlowOnMonitorVisibleControlChangesResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_MONITOR_VISIBLE_CONTROL_CHANGES', { ...params });
};
