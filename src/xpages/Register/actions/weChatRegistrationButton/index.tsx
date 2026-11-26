import { onClickOnWeChatRegister } from './onClickOnWeChatRegister';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsWeChatRegistrationButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsWeChatRegistrationButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsWeChatRegistrationButton => {
  return {
    onClick: (event) => onClickOnWeChatRegister(event, setter, dispatch),
  };
};
