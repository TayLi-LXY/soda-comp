
/**
 * 入参明细:
 * setter 页面设置器
 * summaryContent 摘要内容
 */
export interface FlowCodeSetSummaryContentParams {
  setter: any;
  summaryContent: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetSummaryContentResults {
}

/**
 * 设置数据:摘要内容
 * FLOW_NODE_SET_SUMMARY_CONTENT
 * 唯一id: SummaryOfAttachmentsForSendingInformationItems/FLOW_CODE_SET_SUMMARY_CONTENT
 */
export const flowCodeSetSummaryContent = async (params: FlowCodeSetSummaryContentParams): Promise<FlowCodeSetSummaryContentResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { summaryContent } = params;
  setter.setSummaryContent(summaryContent);
  // 结束流程
  return {}
};
