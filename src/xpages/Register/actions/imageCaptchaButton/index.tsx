import { onClickRefreshImageVerificationCode } from './onClickRefreshImageVerificationCode';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsImageCaptchaButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsImageCaptchaButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsImageCaptchaButton => {
  return {
    onClick: (event) => onClickRefreshImageVerificationCode(event, setter, dispatch),
  };
};
