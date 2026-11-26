

export type BubbleComponentWrapperProps =  {
  placement: string | undefined | start | end;
  loading: boolean;
  content: React.ReactNode | AnyObject | string | number;
  editable: boolean;
  streaming: boolean;
  typing: boolean | BubbleAnimationOption | ((content: ContentType, info: InfoType) => boolean | BubbleAnimationOption);
  avatar: React.ReactNode   | ((content: ContentType, info: InfoType) => React.ReactNode);;
  footer: React.ReactNode   | ((content: ContentType, info: InfoType) => React.ReactNode);;
  header: React.ReactNode   | ((content: ContentType, info: InfoType) => React.ReactNode);
  contentRender: (content: ContentType, info: InfoType ) => React.ReactNode;
  styles: any | undefined;
};

export type BubbleComponentProps = {
  placement: string | undefined | start | end;
  loading: boolean;
  content: React.ReactNode | AnyObject | string | number;
  editable: boolean;
  streaming: boolean;
  typing: boolean | BubbleAnimationOption | ((content: ContentType, info: InfoType) => boolean | BubbleAnimationOption);
  avatar: React.ReactNode   | ((content: ContentType, info: InfoType) => React.ReactNode);;
  footer: React.ReactNode   | ((content: ContentType, info: InfoType) => React.ReactNode);;
  header: React.ReactNode   | ((content: ContentType, info: InfoType) => React.ReactNode);
  contentRender: (content: ContentType, info: InfoType ) => React.ReactNode;
  styles: any | undefined;
};

