import { onGetVerificationCode } from './onGetVerificationCode';
import React from 'react';
import type { Dispatch } from 'redux';
import type { FormInstance } from 'antd';
import type { Setter } from '../../setter';

export type EventsGetVerificationCodeButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsGetVerificationCodeButton = (
  setter: Setter,
  dispatch: Dispatch,
  registrationMobileVerificationForm: FormInstance<any>,
): EventsGetVerificationCodeButton => {
  return {
    onClick: (event) => onGetVerificationCode(event, setter, dispatch, registrationMobileVerificationForm),
  };
};
