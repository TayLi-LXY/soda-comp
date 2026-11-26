import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * uploadFileSummaryVisibleControl 上传文件摘要可见控制
 */
export interface FlowOnClickExpandDataSummaryParams {
  setter: any;
  dispatch: any;
  uploadFileSummaryVisibleControl: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickExpandDataSummaryResults {
}

/**
 * 点击展开数据摘要
 * @com.horsecoder.platform.mall.umi.chat/sendSingleAttachmentInformation/FLOW_ON_CLICK_EXPAND_DATA_SUMMARY
 */
export const flowOnClickExpandDataSummary = async (params: FlowOnClickExpandDataSummaryParams): Promise<FlowOnClickExpandDataSummaryResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/sendSingleAttachmentInformation/FLOW_ON_CLICK_EXPAND_DATA_SUMMARY', { ...params });
};
