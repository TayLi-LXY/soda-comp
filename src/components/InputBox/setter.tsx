

export type Setter = {
  // 输入内容设置
  setInputContent: React.Dispatch<React.SetStateAction<string>>;
  // 选择的大模型设置
  setSelectedllm: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 用户上传文件列表设置
  setUserUploadedFileList: React.Dispatch<React.SetStateAction<any[]>>;
};