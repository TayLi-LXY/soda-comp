

export type Setter = {
  // 聊天回复可见控制设置
  setChatReplyVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 发送信息可见控制设置
  setVisibleControlOfSendingInformation: React.Dispatch<React.SetStateAction<boolean>>;
};