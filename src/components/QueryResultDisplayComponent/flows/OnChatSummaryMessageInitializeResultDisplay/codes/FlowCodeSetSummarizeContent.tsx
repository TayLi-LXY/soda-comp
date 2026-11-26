
/**
 * 入参明细:
 * setter 页面设置器
 * summarizeContent 总结内容
 */
export interface FlowCodeSetSummarizeContentParams {
  setter: any;
  summarizeContent: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeSetSummarizeContentResults {
}

/**
 * 设置数据:总结内容
 * FLOW_NODE_SET_SUMMARIZE_CONTENT
 * 唯一id: QueryResultDisplayComponent/FLOW_CODE_SET_SUMMARIZE_CONTENT
 */
export const flowCodeSetSummarizeContent = async (params: FlowCodeSetSummarizeContentParams): Promise<FlowCodeSetSummarizeContentResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { summarizeContent } = params;
  setter.setSummarizeContent(summarizeContent);
  // 结束流程
  return {}
};
