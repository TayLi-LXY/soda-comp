import { onBindMobileNumber } from './onBindMobileNumber';
import type { Dispatch } from 'redux';
import type { FormInstance } from 'antd';
import type { Setter } from '../../setter';

export type EventsBindPhoneNumberButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsBindPhoneNumberButton = (
  setter: Setter,
  dispatch: Dispatch,
  registrationMobileVerificationForm: FormInstance<any>,
): EventsBindPhoneNumberButton => {
  return {
    onClick: (event) => onBindMobileNumber(event, setter, dispatch, registrationMobileVerificationForm),
  };
};
