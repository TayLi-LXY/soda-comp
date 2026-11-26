
/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * uploadFileSummaryVisibleControl 上传文件摘要可见控制
 */
export interface FlowCodeOnClickExpandDataSummaryParams {
  setter: any;
  dispatch: any;
  uploadFileSummaryVisibleControl: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickExpandDataSummaryResults {
}

/**
 * 点击展开数据摘要
 * FLOW_NODE_ON_CLICK_EXPAND_DATA_SUMMARY
 * 唯一id: SendSingleAttachmentInformation/FLOW_CODE_ON_CLICK_EXPAND_DATA_SUMMARY
 */
export const flowCodeOnClickExpandDataSummary = async (params: FlowCodeOnClickExpandDataSummaryParams): Promise<FlowCodeOnClickExpandDataSummaryResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { dispatch } = params;
  const { uploadFileSummaryVisibleControl } = params;
  // 切换可见性
  const nextVisible = !uploadFileSummaryVisibleControl;
  setter.setUploadFileSummaryVisibleControl(nextVisible);
  // 根据切换后的状态更新按钮文案
  setter.setDisplayContentUnderCard(nextVisible ? '点我收起' : '点我展开');
  // 结束流程
  return {}
};
