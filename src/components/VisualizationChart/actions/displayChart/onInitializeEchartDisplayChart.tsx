import * as echarts from 'echarts';
import type { Dispatch } from 'redux';
import React from 'react';
import type { Setter } from '../../setter';

/**
 * 初始化展示图表
 * 唯一id: visualizationChart-onInitializeEchartDisplayChart
 */
export const onInitializeEchartDisplayChart = (
  setter: Setter,
  dispatch: Dispatch,
  displayChartOptions: any,
  displayChartRef: React.MutableRefObject<any>,
) => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  if (displayChartOptions && displayChartRef.current) {
    let chartView: any = null;
    const chart = echarts.getInstanceByDom(displayChartRef.current);
    if (chart) {
      chartView = chart;
    } else {
      chartView = echarts.init(displayChartRef.current);
    }
    chartView.setOption(displayChartOptions);
  }
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
};
