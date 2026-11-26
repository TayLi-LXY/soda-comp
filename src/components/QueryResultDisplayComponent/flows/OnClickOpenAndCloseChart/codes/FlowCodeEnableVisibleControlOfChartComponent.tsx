
/**
 * 入参明细:
 * setter 页面设置器
 */
export interface FlowCodeEnableVisibleControlOfChartComponentParams {
  setter: any;
}

/**
 * 出参明细:
 */
export interface FlowCodeEnableVisibleControlOfChartComponentResults {
}

/**
 * 设置图表组件可见控制可见
 * FLOW_NODE_ENABLE_VISIBLE_CONTROL_OF_CHART_COMPONENT
 * 唯一id: QueryResultDisplayComponent/FLOW_CODE_ENABLE_VISIBLE_CONTROL_OF_CHART_COMPONENT
 */
export const flowCodeEnableVisibleControlOfChartComponent = async (params: FlowCodeEnableVisibleControlOfChartComponentParams): Promise<FlowCodeEnableVisibleControlOfChartComponentResults> => {
  // 初始化流程出参
  // 开始流程
  const { setter } = params;
  setter.setVisibleControlOfChartComponent((prev: boolean) => !prev);
  // 结束流程
  return {}
};
