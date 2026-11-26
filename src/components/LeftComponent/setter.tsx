import React from 'react';


export type Setter = {
  // 是否首次登录无会话设置
  setIfFirstLogWithoutConversation: React.Dispatch<React.SetStateAction<boolean>>;
  // 左侧边栏收起可见控制设置
  setFoldingUpVisibleControlsOnLeftSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  // 创建群聊侧边可见控制设置
  setCreateGroupChatWithVisibleControlsOnSide: React.Dispatch<React.SetStateAction<boolean>>;
  // 邀请成员侧边可见控制设置
  setInviteMembersWithVisibleControlsOnSide: React.Dispatch<React.SetStateAction<boolean>>;
  // 收起设置可见设置
  setCollapseSettingsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  // 左侧边栏展开可见控制设置
  setExpandVisibleControlsOnLeftSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  // 邀请成员可见控制设置
  setInviteMembersVisibleControl: React.Dispatch<React.SetStateAction<boolean>>;
  // 对话卡片列表设置
  setDialogueCardList: React.Dispatch<React.SetStateAction<any[]>>;
  // 气泡内容设置
  setPopoverContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
};