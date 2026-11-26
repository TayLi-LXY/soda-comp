

export type Setter = {
  // 消息内容设置
  setMessageContent: React.Dispatch<React.SetStateAction<string>>;
  // 智能体昵称可见控制设置
  setIntelligentAgentNicknameVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 角色可见控制设置
  setCharacterVisibilityControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 结果刷新信号设置
  setResultRefreshSignal: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 是否打字机设置
  setIfTypewriter: React.Dispatch<React.SetStateAction<boolean>>;
  // 查询结果展示可见控制设置
  setQueryResultsDisplayVisibleControls: React.Dispatch<React.SetStateAction<boolean>>;
  // 自定义大模型回复可见控制设置
  setCustomLargeModelReplyVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 大模型回复组件可见控制设置
  setLargeModelReplyComponentVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 回复已读未读可见控制设置
  setReplyReadUnreadVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 回复信息操作可见控制设置
  setResponseMessageOperationVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
};