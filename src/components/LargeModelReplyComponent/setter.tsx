

export type Setter = {
  // 回复文本可见控制设置
  setVisibleControlOfReplyText: React.Dispatch<React.SetStateAction<boolean>>;
  // 方案推荐回复可见控制设置
  setRecommendedSolutionReplyVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 方案卡片单项列表设置
  setListOfIndividualItemsOnPlanCard: React.Dispatch<React.SetStateAction<any[]>>;
  // 语音条组件可见控制设置
  setVoiceBarComponentVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
};