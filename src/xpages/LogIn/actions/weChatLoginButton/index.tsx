import { onClickOpenWeChatLogin } from './onClickOpenWeChatLogin';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsWeChatLoginButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsWeChatLoginButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsWeChatLoginButton => {
  return {
    onClick: (event) => onClickOpenWeChatLogin(event, setter, dispatch),
  };
};
