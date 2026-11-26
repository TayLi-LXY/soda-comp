

export type Setter = {
  // 对话卡片选中变化套装数据设置
  setSelectChangePackageDataInDialogueCard: React.Dispatch<React.SetStateAction<string | undefined>>;
  // 头像url设置
  setAvatarUrl: React.Dispatch<React.SetStateAction<string>>;
  // 对话卡片时间显示设置
  setDialogueCardTimeDisplay: React.Dispatch<React.SetStateAction<string>>;
  // 最近一条消息缩略设置
  setRecentMessageAbbreviation: React.Dispatch<React.SetStateAction<string | undefined>>;
};