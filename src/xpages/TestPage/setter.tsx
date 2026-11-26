

export type Setter = {
  // 文件地址设置
  setDocuments: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  // 文件预览可见控制设置
  setFilePreviewVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 表格数据设置
  setRowData: React.Dispatch<React.SetStateAction<any[] | undefined>>;
  // 列定义设置
  setColumnDefs: React.Dispatch<React.SetStateAction<any[] | undefined>>;
  // 行点击回调设置
  setOnRowClicked: React.Dispatch<React.SetStateAction<(event: any) => void>>;
  // 选中变化回调设置
  setOnSelectionChanged: React.Dispatch<React.SetStateAction<(event: any) => void>>;
  // 表格就绪回调设置
  setOnGridReady: React.Dispatch<React.SetStateAction<(event: any) => void>>;
  // aggrid可见控制设置
  setAggridVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // grid可见控制设置
  setGridVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
};