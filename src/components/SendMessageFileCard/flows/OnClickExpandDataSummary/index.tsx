import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * entity 发送消息文件卡片列表单项
 * index 索引
 * selectAttachmentCallback 选中附件回调
 */
export interface FlowOnClickExpandDataSummaryParams {
  setter: any;
  dispatch: any;
  entity: any;
  index: any;
  selectAttachmentCallback: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickExpandDataSummaryResults {
}

/**
 * 点击展开数据摘要
 * @com.horsecoder.platform.mall.umi.chat/sendMessageFileCard/FLOW_ON_CLICK_EXPAND_DATA_SUMMARY
 */
export const flowOnClickExpandDataSummary = async (params: FlowOnClickExpandDataSummaryParams): Promise<FlowOnClickExpandDataSummaryResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/sendMessageFileCard/FLOW_ON_CLICK_EXPAND_DATA_SUMMARY', { ...params });
};
