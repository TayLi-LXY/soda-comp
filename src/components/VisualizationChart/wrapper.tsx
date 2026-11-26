'use client';
import React, { useMemo, useEffect, useState, useRef } from 'react';
import type { VisualizationChartWrapperProps } from './types';
import { onInitializeChartData, onInitializeEchartDisplayChart } from './actions';
import type { Setter } from './setter';
import VisualizationChartComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 可视化图表
 */
const VisualizationChartWrapper: React.FC<VisualizationChartWrapperProps> = () => {
  /*
   * 前置代码数据区域
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  const dispatch = useDispatch();
  // 内部可变数据: 图表数据(chartData)
  const [chartData, setChartData] = useState<any | undefined>(undefined);
  // 内部可变数据: 展示图表配置(displayChartOptions)
  const [displayChartOptions, setDisplayChartOptions] = useState<any>({"xAxis":{"type":"category","data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},"yAxis":{"type":"value"},"series":[{"data":[150,230,224,218,135,147,260],"type":"line"}]});
  // 内部数据: 展示图表图表Ref(displayChartRef)
  // 图表Ref
  const displayChartRef = useRef<any>();
  const setter: Setter = useMemo(() => { return { setChartData, setDisplayChartOptions };}, []);

  // 组件displayChartContainer数据变化触发的交互入口：初始化图表数据
  useEffect(() => onInitializeChartData(setter, dispatch), [setter, dispatch]);
  // 组件displayChart数据变化触发的交互入口：初始化展示图表
  useEffect(() => onInitializeEchartDisplayChart(setter, dispatch, displayChartOptions, displayChartRef), [setter, dispatch, displayChartOptions, displayChartRef]);


  /*
   * end
   */

  /*
   * 获取父组件传值
   * 定义当前组件数据
   * 定义静态变量
   * 获取组件redux数据
   * 获取组件挂载模型数据
   * 获取组件挂载流程数据
   * 装配子组件数据
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  return (
    <VisualizationChartComponent 
      chartData={chartData}
      setChartData={setChartData}
      displayChartOptions={displayChartOptions}
      setDisplayChartOptions={setDisplayChartOptions}
      displayChartRef={displayChartRef}
    />
  );
};

export default VisualizationChartWrapper;
