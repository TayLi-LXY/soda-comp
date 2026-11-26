

export type Setter = {
  // 图表数据设置
  setChartData: React.Dispatch<React.SetStateAction<any | undefined>>;
  // 展示图表配置设置
  setDisplayChartOptions: React.Dispatch<React.SetStateAction<any>>;
};