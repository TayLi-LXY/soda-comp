import { onClickRegister } from './onClickRegister';
import type { Dispatch } from 'redux';
import type { FormInstance } from 'antd';
import type { Setter } from '../../setter';

export type EventsRegisterButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsRegisterButton = (
  setter: Setter,
  dispatch: Dispatch,
  registrationMobileVerificationForm: FormInstance<any>,
): EventsRegisterButton => {
  return {
    onClick: (event) => onClickRegister(event, setter, dispatch, registrationMobileVerificationForm),
  };
};
