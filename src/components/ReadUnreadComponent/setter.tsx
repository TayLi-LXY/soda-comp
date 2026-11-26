

export type Setter = {
  // 未读可见控制设置
  setUnreadVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 已读可见控制设置
  setReadVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
};