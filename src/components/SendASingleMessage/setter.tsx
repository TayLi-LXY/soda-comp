

export type Setter = {
  // 消息内容设置
  setMessageContent: React.Dispatch<React.SetStateAction<string>>;
  // 智能体昵称可见控制设置
  setIntelligentAgentNicknameVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 发送已读未读可见控制设置
  setSendVisibleControlForReadAndUnread: React.Dispatch<React.SetStateAction<boolean>>;
  // 是否打字机设置
  setIfTypewriter: React.Dispatch<React.SetStateAction<boolean>>;
  // 发送信息操作可见控制设置
  setVisibleControlOfSendingInformationOperation: React.Dispatch<React.SetStateAction<boolean>>;
};