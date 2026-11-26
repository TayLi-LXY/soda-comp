import { onGroupChatSettingsDrawerClose } from './onGroupChatSettingsDrawerClose';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsGroupChatSettingsDrawer = {
  onClose: (
    event: any,
  ) => Promise<void>;
};

export const eventsGroupChatSettingsDrawer = (
  setter: Setter,
  dispatch: Dispatch,
): EventsGroupChatSettingsDrawer => {
  return {
    onClose: (event) => onGroupChatSettingsDrawerClose(event, setter, dispatch),
  };
};
