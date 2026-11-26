import { refreshMainPageVisibleControlSignalDataState } from '@/xpages/Main/models/action';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * visibleControlSignalData 可见控制信号数据
 */
export interface FlowCodeOnMonitorVisibleControlChangesParams {
  setter: any;
  dispatch: any;
  visibleControlSignalData: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnMonitorVisibleControlChangesResults {
}

/**
 * 监听可见控制变化
 * FLOW_NODE_ON_MONITOR_VISIBLE_CONTROL_CHANGES
 * 唯一id: Main/FLOW_CODE_ON_MONITOR_VISIBLE_CONTROL_CHANGES
 */
export const flowCodeOnMonitorVisibleControlChanges = async (params: FlowCodeOnMonitorVisibleControlChangesParams): Promise<FlowCodeOnMonitorVisibleControlChangesResults> => {
  // 初始化流程出参
  const { setter, dispatch, visibleControlSignalData } = params;

  // 收到信号后，切换可见控制状态
  if (visibleControlSignalData && visibleControlSignalData.startsWith('SHOW_CHAT_AND_MENU_')) {
    if (setter) {
      setter.setLeftSideDialogVisibleControl?.(true);
      setter.setTopMenuVisibleControls?.(true);
      setter.setAddDialogueVisibleControl?.(false);
    }
    // 消费后清空信号
    dispatch(refreshMainPageVisibleControlSignalDataState(''));
  }

  // 结束流程
  return {}
};
