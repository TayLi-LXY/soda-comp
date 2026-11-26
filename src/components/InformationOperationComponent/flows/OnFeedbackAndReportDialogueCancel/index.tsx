import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnFeedbackAndReportDialogueCancelParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnFeedbackAndReportDialogueCancelResults {
}

/**
 * 关闭反馈与举报对话框
 * @com.horsecoder.platform.mall.umi.chat/informationOperationComponent/FLOW_ON_FEEDBACK_AND_REPORT_DIALOGUE_CANCEL
 */
export const flowOnFeedbackAndReportDialogueCancel = async (params: FlowOnFeedbackAndReportDialogueCancelParams): Promise<FlowOnFeedbackAndReportDialogueCancelResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/informationOperationComponent/FLOW_ON_FEEDBACK_AND_REPORT_DIALOGUE_CANCEL', { ...params });
};
