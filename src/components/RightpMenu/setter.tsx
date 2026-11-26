

export type Setter = {
  // 预览可见设置
  setPreviewVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // 代码可见设置
  setCodeVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // 页面可见设置
  setPageVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // 流程可见设置
  setFlowVisible: React.Dispatch<React.SetStateAction<boolean>>;
};