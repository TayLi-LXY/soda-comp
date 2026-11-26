

export type Setter = {
  // 样式类名设置
  setClassNames: React.Dispatch<React.SetStateAction<Record<SemanticDOM, string> | undefined>>;
  // 样式 style设置
  setStyles: React.Dispatch<React.SetStateAction<Record<SemanticDOM, CSSProperties> | undefined>>;
  // 内容设置
  setChildren: React.Dispatch<React.SetStateAction<React.ReactNode | undefined>>;
  // 默认是否展开设置
  setDefaultExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  // 闪动模式设置
  setBlink: React.Dispatch<React.SetStateAction<boolean>>;
  // 展开事件设置
  setOnExpand: React.Dispatch<React.SetStateAction<((expand: boolean) => void) | undefined>>;
  // 思考过程可见控制设置
  setThinkingProcessVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
};