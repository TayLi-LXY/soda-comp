

export type PromptsComponentWrapperProps =  {
  title: string | undefined;
  items: any[] | undefined;
  onItemClick: (info: { data: PromptProps }) => void;
  styles: Record<SemanticType, React.CSSProperties> | undefined;
  vertical: boolean;
  wrap: boolean;
  fadeIn: boolean;
};

export type PromptsComponentProps = {
  title: string | undefined;
  items: any[] | undefined;
  onItemClick: (info: { data: PromptProps }) => void;
  styles: Record<SemanticType, React.CSSProperties> | undefined;
  vertical: boolean;
  wrap: boolean;
  fadeIn: boolean;
};

