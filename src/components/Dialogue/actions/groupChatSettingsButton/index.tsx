import { onClickOpenAndCloseGroupChatSettings } from './onClickOpenAndCloseGroupChatSettings';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsGroupChatSettingsButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsGroupChatSettingsButton = (
  setter: Setter,
  dispatch: Dispatch,
  groupChatSettingsDrawerVisible: boolean,
): EventsGroupChatSettingsButton => {
  return {
    onClick: (event) => onClickOpenAndCloseGroupChatSettings(event, setter, dispatch, groupChatSettingsDrawerVisible),
  };
};
