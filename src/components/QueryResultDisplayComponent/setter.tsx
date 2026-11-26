

export type Setter = {
  // 消息ID设置
  setMessageId: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 是否流式设置
  setIfStream: React.Dispatch<React.SetStateAction<boolean>>;
  // 消息内容设置
  setMessageContent: React.Dispatch<React.SetStateAction<string | undefined>>;
  // sql组件可见控制设置
  setSQLComponentVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 总结内容设置
  setSummarizeContent: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 图表组件可见控制设置
  setVisibleControlOfChartComponent: React.Dispatch<React.SetStateAction<boolean>>;
  // 文件链接设置
  setFileUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 提示词列表设置
  setItems: React.Dispatch<React.SetStateAction<any[] | undefined>>;
};