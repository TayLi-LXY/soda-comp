import React from 'react';


export type VisualizationChartWrapperProps =  {
};

export type VisualizationChartProps = {
  chartData: any | undefined;
  setChartData: (chartData: any | undefined) => void;
  displayChartOptions: any;
  setDisplayChartOptions: (displayChartOptions: any) => void;
  displayChartRef: React.MutableRefObject<any>;
};

