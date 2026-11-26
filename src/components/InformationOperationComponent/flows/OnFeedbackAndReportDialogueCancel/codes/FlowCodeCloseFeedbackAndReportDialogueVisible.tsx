
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeCloseFeedbackAndReportDialogueVisibleParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeCloseFeedbackAndReportDialogueVisibleResults {
}

/**
 * 关闭反馈与举报对话框
 * FLOW_NODE_CLOSE_FEEDBACK_AND_REPORT_DIALOGUE_VISIBLE
 * 唯一id: InformationOperationComponent/FLOW_CODE_CLOSE_FEEDBACK_AND_REPORT_DIALOGUE_VISIBLE
 */
export const flowCodeCloseFeedbackAndReportDialogueVisible = async (params: FlowCodeCloseFeedbackAndReportDialogueVisibleParams): Promise<FlowCodeCloseFeedbackAndReportDialogueVisibleResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setFeedbackAndReportDialogueVisible(false);
  // 结束流程
  return {}
};
