import type { Actions } from './actions';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import React from 'react';


export type LeftComponentWrapperProps =  {
};

export type LeftComponentProps = {
  actions: Actions;
  loggedinUser: User | undefined;
  conversationId: string | undefined;
  ifFirstLogWithoutConversation: boolean;
  setIfFirstLogWithoutConversation: (ifFirstLogWithoutConversation: boolean) => void;
  memberType: string | undefined;
  foldingUpVisibleControlsOnLeftSidebar: boolean;
  setFoldingUpVisibleControlsOnLeftSidebar: (foldingUpVisibleControlsOnLeftSidebar: boolean) => void;
  createGroupChatWithVisibleControlsOnSide: boolean;
  setCreateGroupChatWithVisibleControlsOnSide: (createGroupChatWithVisibleControlsOnSide: boolean) => void;
  inviteMembersWithVisibleControlsOnSide: boolean;
  setInviteMembersWithVisibleControlsOnSide: (inviteMembersWithVisibleControlsOnSide: boolean) => void;
  collapseSettingsVisible: boolean;
  setCollapseSettingsVisible: (collapseSettingsVisible: boolean) => void;
  expandVisibleControlsOnLeftSidebar: boolean;
  setExpandVisibleControlsOnLeftSidebar: (expandVisibleControlsOnLeftSidebar: boolean) => void;
  inviteMembersVisibleControl: boolean;
  setInviteMembersVisibleControl: (inviteMembersVisibleControl: boolean) => void;
  dialogueCardList: any[];
  setDialogueCardList: (dialogueCardList: any[]) => void;
  dialogueListRefreshSignal: string | undefined;
  popoverContent: React.ReactNode;
  setPopoverContent: (popoverContent: React.ReactNode) => void;
  setPanelVisibleControls: boolean;
};

