
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * uploadFileSummaryVisibleControl 上传文件摘要可见控制
 */
export interface FlowCodeOnMonitorDataChangesAnimationParams {
  setter: any;
  dispatch: any;
  uploadFileSummaryVisibleControl: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnMonitorDataChangesAnimationResults {
}

/**
 * 监听数据变化动画
 * FLOW_NODE_ON_MONITOR_DATA_CHANGES_ANIMATION
 * 唯一id: SendSingleAttachmentInformation/FLOW_CODE_ON_MONITOR_DATA_CHANGES_ANIMATION
 */
export const flowCodeOnMonitorDataChangesAnimation = async (params: FlowCodeOnMonitorDataChangesAnimationParams): Promise<FlowCodeOnMonitorDataChangesAnimationResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { uploadFileSummaryVisibleControl } = params;
  // 结束流程
  return {}
};
