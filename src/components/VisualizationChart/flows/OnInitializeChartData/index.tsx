import { run } from '@horsecoder/flow';

/**
 * 入参明细:
 * setter 页面设置器
 * dispatch WEB状态更新
 */
export interface FlowOnInitializeChartDataParams {
  setter: any;
  dispatch: any;
}

/**
 * 出参明细:
 */
export interface FlowOnInitializeChartDataResults {
}

/**
 * 初始化图表数据
 * @com.horsecoder.platform.mall.umi.chat/visualizationChart/FLOW_ON_INITIALIZE_CHART_DATA
 */
export const flowOnInitializeChartData = async (params: FlowOnInitializeChartDataParams): Promise<FlowOnInitializeChartDataResults> => {
  return run('@com.horsecoder.platform.mall.umi.chat/visualizationChart/FLOW_ON_INITIALIZE_CHART_DATA', { ...params });
};
