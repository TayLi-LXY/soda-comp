

export type ThinkComponentWrapperProps =  {
  classNames: Record<SemanticDOM, string> | undefined;
  styles: Record<SemanticDOM, CSSProperties> | undefined;
  children: React.ReactNode | undefined;
  title: React.ReactNode;
  loading: boolean | React.ReactNode | undefined;
  defaultExpanded: boolean;
  blink: boolean;
  onExpand: ((expand: boolean) => void) | undefined;
};

export type ThinkComponentProps = {
  classNames: Record<SemanticDOM, string> | undefined;
  styles: Record<SemanticDOM, CSSProperties> | undefined;
  children: React.ReactNode | undefined;
  title: React.ReactNode;
  loading: boolean | React.ReactNode | undefined;
  defaultExpanded: boolean;
  blink: boolean;
  onExpand: ((expand: boolean) => void) | undefined;
};

