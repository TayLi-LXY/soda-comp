import { onClickOpenGoogleLoginPanel } from './onClickOpenGoogleLoginPanel';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsGoogleLoginButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsGoogleLoginButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsGoogleLoginButton => {
  return {
    onClick: (event) => onClickOpenGoogleLoginPanel(event, setter, dispatch),
  };
};
