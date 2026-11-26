
/**
 * 入参明细:
 * index 索引
 * entity 发送消息文件卡片列表单项
 * selectAttachmentCallback 选中附件回调
 */
export interface FlowCodeOnClickExpandDataSummaryParams {
  index: any;
  entity: any;
  selectAttachmentCallback: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickExpandDataSummaryResults {
}

/**
 * 点击展开数据摘要
 * FLOW_NODE_ON_CLICK_EXPAND_DATA_SUMMARY
 * 唯一id: SendMessageFileCard/FLOW_CODE_ON_CLICK_EXPAND_DATA_SUMMARY
 */
export const flowCodeOnClickExpandDataSummary = async (params: FlowCodeOnClickExpandDataSummaryParams): Promise<FlowCodeOnClickExpandDataSummaryResults> => {
  // 初始化流程出参
  // 开始流程
  const { index } = params;
  const { entity } = params;
  const { selectAttachmentCallback } = params;

  selectAttachmentCallback?.(entity, index);

  // 结束流程
  return {}
};
