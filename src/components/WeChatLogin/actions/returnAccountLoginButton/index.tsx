import { onClickReturnAccountLogin } from './onClickReturnAccountLogin';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsReturnAccountLoginButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsReturnAccountLoginButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsReturnAccountLoginButton => {
  return {
    onClick: (event) => onClickReturnAccountLogin(event, setter, dispatch),
  };
};
