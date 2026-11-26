

export type ConversationsComponentWrapperProps =  {
  items: any[];
  activeKey: string;
  styles: styles?: {creation?: React.CSSProperties;item?: React.CSSProperties;};
  classNames: classNames?: { creation?: string; item?:string;};
  rootClassName: string;
};

export type ConversationsComponentProps = {
  items: any[];
  activeKey: string;
  styles: styles?: {creation?: React.CSSProperties;item?: React.CSSProperties;};
  classNames: classNames?: { creation?: string; item?:string;};
  rootClassName: string;
};

