import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnOpenFeedbackAndReportDialogueParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnOpenFeedbackAndReportDialogueResults {
}

/**
 * 打开反馈与举报对话框
 * @com.horsecoder.platform.mall.umi.chat/informationOperationComponent/FLOW_ON_OPEN_FEEDBACK_AND_REPORT_DIALOGUE
 */
export const flowOnOpenFeedbackAndReportDialogue = async (params: FlowOnOpenFeedbackAndReportDialogueParams): Promise<FlowOnOpenFeedbackAndReportDialogueResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/informationOperationComponent/FLOW_ON_OPEN_FEEDBACK_AND_REPORT_DIALOGUE', { ...params });
};
