

export type Setter = {
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
};