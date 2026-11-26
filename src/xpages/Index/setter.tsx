

export type Setter = {
  // 输入值设置
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 占位符设置
  setPlaceholder: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 是否可用设置
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  // 是否只读设置
  setReadOnly: React.Dispatch<React.SetStateAction<boolean>>;
  // 加载设置
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  // 自动调整大小设置
  setAutoSize: React.Dispatch<React.SetStateAction<boolean | { minRows?: number; maxRows?: number }>>;
  // 接受设置
  setAccept: React.Dispatch<React.SetStateAction<string | string[] | undefined>>;
  // 最大文件数设置
  setMaxCount: React.Dispatch<React.SetStateAction<number | undefined>>;
  // 最大容量设置
  setMaxSize: React.Dispatch<React.SetStateAction<number | undefined>>;
};