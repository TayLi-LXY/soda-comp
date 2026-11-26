import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 * queryResultsDisplayVisibleControls 查询结果展示可见控制
 * entity 聊天记录列表控制单项
 */
export interface FlowOnClickSwitchQueryResultsAndSeeControlParams {
  setter: any;
  dispatch: any;
  queryResultsDisplayVisibleControls: any;
  entity: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickSwitchQueryResultsAndSeeControlResults {
}

/**
 * 点击开关查询结果可见控制
 * @com.horsecoder.platform.mall.umi.chat/replyIndividualComponent/FLOW_ON_CLICK_SWITCH_QUERY_RESULTS_AND_SEE_CONTROL
 */
export const flowOnClickSwitchQueryResultsAndSeeControl = async (params: FlowOnClickSwitchQueryResultsAndSeeControlParams): Promise<FlowOnClickSwitchQueryResultsAndSeeControlResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/replyIndividualComponent/FLOW_ON_CLICK_SWITCH_QUERY_RESULTS_AND_SEE_CONTROL', { ...params });
};
