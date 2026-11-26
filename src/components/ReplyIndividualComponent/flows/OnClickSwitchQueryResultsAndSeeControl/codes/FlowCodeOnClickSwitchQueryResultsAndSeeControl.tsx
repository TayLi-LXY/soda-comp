
/**
 * 入参明细:
 * setter 页面设置器
 * queryResultsDisplayVisibleControls 查询结果展示可见控制
 * entity 聊天记录列表控制单项
 */
export interface FlowCodeOnClickSwitchQueryResultsAndSeeControlParams {
  setter: any;
  queryResultsDisplayVisibleControls: any;
  entity: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeOnClickSwitchQueryResultsAndSeeControlResults {
}

/**
 * 点击开关查询结果可见控制
 * FLOW_NODE_ON_CLICK_SWITCH_QUERY_RESULTS_AND_SEE_CONTROL
 * 唯一id: ReplyIndividualComponent/FLOW_CODE_ON_CLICK_SWITCH_QUERY_RESULTS_AND_SEE_CONTROL
 */
export const flowCodeOnClickSwitchQueryResultsAndSeeControl = async (params: FlowCodeOnClickSwitchQueryResultsAndSeeControlParams): Promise<FlowCodeOnClickSwitchQueryResultsAndSeeControlResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  const { queryResultsDisplayVisibleControls } = params;
  const { entity } = params;

  if (!entity) {
    setter.setQueryResultsDisplayVisibleControls(false);
    return {};
  }
  let message = entity.content;
  try {
    message = JSON.parse(message);
  } catch {
    setter.setQueryResultsDisplayVisibleControls(false);
    return {};
  }
  if (message.dialogueTask?.state !== '301' || entity.ifStream) {
    setter.setQueryResultsDisplayVisibleControls(false);
    return {};
  }
  setter.setQueryResultsDisplayVisibleControls(!queryResultsDisplayVisibleControls);
  if (!queryResultsDisplayVisibleControls) {
    setter.setResultRefreshSignal(Math.random().toString());
  }

  // 结束流程
  return {}
};
