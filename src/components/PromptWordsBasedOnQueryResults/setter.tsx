

export type Setter = {
  // 标题设置
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 单击事件设置
  setOnItemClick: React.Dispatch<React.SetStateAction<(info: { data: PromptProps }) => void>>;
  // 自定义样式设置
  setStyles: React.Dispatch<React.SetStateAction<Record<SemanticType, React.CSSProperties> | undefined>>;
  // 垂直设置
  setVertical: React.Dispatch<React.SetStateAction<boolean>>;
  // 换行设置
  setWrap: React.Dispatch<React.SetStateAction<boolean>>;
  // 渐入效果设置
  setFadeIn: React.Dispatch<React.SetStateAction<boolean>>;
};