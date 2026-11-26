

export type SendASingleMessageWrapperProps =  {
  entity: any;
  index: number;
};

export type SendASingleMessageProps = {
  entity: any;
  index: number;
  messageContent: string;
  setMessageContent: (messageContent: string) => void;
  intelligentAgentNicknameVisibleControl: boolean;
  setIntelligentAgentNicknameVisibleControl: (intelligentAgentNicknameVisibleControl: boolean) => void;
  sendVisibleControlForReadAndUnread: boolean;
  setSendVisibleControlForReadAndUnread: (sendVisibleControlForReadAndUnread: boolean) => void;
  ifTypewriter: boolean;
  setIfTypewriter: (ifTypewriter: boolean) => void;
  visibleControlOfSendingInformationOperation: boolean;
  setVisibleControlOfSendingInformationOperation: (visibleControlOfSendingInformationOperation: boolean) => void;
};

