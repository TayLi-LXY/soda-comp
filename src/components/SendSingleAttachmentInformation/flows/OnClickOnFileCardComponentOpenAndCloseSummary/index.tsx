import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * dispatch WEB状态更新
 * setter 页面设置器
 */
export interface FlowOnClickOnFileCardComponentOpenAndCloseSummaryParams {
  dispatch: any;
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOnFileCardComponentOpenAndCloseSummaryResults {
}

/**
 * 点击文件卡片组件打开和关闭摘要
 * @com.horsecoder.platform.mall.umi.chat/sendSingleAttachmentInformation/FLOW_ON_CLICK_ON_FILE_CARD_COMPONENT_OPEN_AND_CLOSE_SUMMARY
 */
export const flowOnClickOnFileCardComponentOpenAndCloseSummary = async (params: FlowOnClickOnFileCardComponentOpenAndCloseSummaryParams): Promise<FlowOnClickOnFileCardComponentOpenAndCloseSummaryResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/sendSingleAttachmentInformation/FLOW_ON_CLICK_ON_FILE_CARD_COMPONENT_OPEN_AND_CLOSE_SUMMARY', { ...params });
};
