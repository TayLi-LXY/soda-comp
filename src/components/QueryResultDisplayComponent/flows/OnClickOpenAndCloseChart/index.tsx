import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnClickOpenAndCloseChartParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnClickOpenAndCloseChartResults {
}

/**
 * 点击打开关闭图表
 * @com.horsecoder.platform.mall.umi.chat/queryResultDisplayComponent/FLOW_ON_CLICK_OPEN_AND_CLOSE_CHART
 */
export const flowOnClickOpenAndCloseChart = async (params: FlowOnClickOpenAndCloseChartParams): Promise<FlowOnClickOpenAndCloseChartResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/queryResultDisplayComponent/FLOW_ON_CLICK_OPEN_AND_CLOSE_CHART', { ...params });
};
