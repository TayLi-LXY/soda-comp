import { onClickOnSMSVerificationCodeLogIn } from './onClickOnSMSVerificationCodeLogIn';
import type { Dispatch } from 'redux';
import type { FormInstance } from 'antd';
import type { Setter } from '../../setter';

export type EventsVerificationCodeLoginButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsVerificationCodeLoginButton = (
  setter: Setter,
  dispatch: Dispatch,
  verificationCodeLoginForm: FormInstance<any>,
): EventsVerificationCodeLoginButton => {
  return {
    onClick: (event) => onClickOnSMSVerificationCodeLogIn(event, setter, dispatch, verificationCodeLoginForm),
  };
};
