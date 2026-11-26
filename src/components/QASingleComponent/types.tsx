

export type QASingleComponentWrapperProps =  {
  entity: any;
  index: number;
};

export type QASingleComponentProps = {
  entity: any;
  index: number;
  senderNicknameDictionary: map;
  userCloneId: string;
  chatReplyVisibleControl: boolean;
  setChatReplyVisibleControl: (chatReplyVisibleControl: boolean) => void;
  visibleControlOfSendingInformation: boolean;
  setVisibleControlOfSendingInformation: (visibleControlOfSendingInformation: boolean) => void;
};

