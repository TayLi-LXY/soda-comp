import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * uploadFileSummaryVisibleControl uploadFileSummaryVisibleControl
 */
export interface FlowOnMonitorDataChangesAnimationParams {
  setter: any;
  dispatch: any;
  uploadFileSummaryVisibleControl: any;
}

/**
 * 出参明细:
 */
export interface FlowOnMonitorDataChangesAnimationResults {
}

/**
 * 监听数据变化动画
 * @com.horsecoder.platform.mall.umi.chat/sendMessageFileCard/FLOW_ON_MONITOR_DATA_CHANGES_ANIMATION
 */
export const flowOnMonitorDataChangesAnimation = async (params: FlowOnMonitorDataChangesAnimationParams): Promise<FlowOnMonitorDataChangesAnimationResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/sendMessageFileCard/FLOW_ON_MONITOR_DATA_CHANGES_ANIMATION', { ...params });
};
