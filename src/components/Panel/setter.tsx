

export type Setter = {
  // 画布可见设置
  setCanvasVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // 表可视化可见设置
  setTableVisualizationVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // 协作流程可见设置
  setCollaborativeFlowVisible: React.Dispatch<React.SetStateAction<boolean>>;
};