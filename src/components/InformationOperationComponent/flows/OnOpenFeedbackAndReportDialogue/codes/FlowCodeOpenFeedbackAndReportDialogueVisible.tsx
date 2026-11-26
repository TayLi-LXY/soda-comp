
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeOpenFeedbackAndReportDialogueVisibleParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOpenFeedbackAndReportDialogueVisibleResults {
}

/**
 * 打开反馈与举报对话框
 * FLOW_NODE_OPEN_FEEDBACK_AND_REPORT_DIALOGUE_VISIBLE
 * 唯一id: InformationOperationComponent/FLOW_CODE_OPEN_FEEDBACK_AND_REPORT_DIALOGUE_VISIBLE
 */
export const flowCodeOpenFeedbackAndReportDialogueVisible = async (params: FlowCodeOpenFeedbackAndReportDialogueVisibleParams): Promise<FlowCodeOpenFeedbackAndReportDialogueVisibleResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setFeedbackAndReportDialogueVisible(true);
  // 结束流程
  return {}
};
