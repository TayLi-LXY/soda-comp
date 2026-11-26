import { onNewConversation } from './onNewConversation';
import React from 'react';
import type { Dispatch } from 'redux';
import type { User } from '@/types/com.horsecoder.identity/sys/User';
import type { Setter } from '../../setter';

export type EventsAddNewConversation = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsAddNewConversation = (
  setter: Setter,
  dispatch: Dispatch,
  loggedinUser: User | undefined,
): EventsAddNewConversation => {
  return {
    onClick: (event) => onNewConversation(event, setter, dispatch, loggedinUser),
  };
};
