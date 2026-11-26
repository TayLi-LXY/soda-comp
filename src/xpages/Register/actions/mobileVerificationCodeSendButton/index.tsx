import { onSendMobileVerificationCode } from './onSendMobileVerificationCode';
import type { Dispatch } from 'redux';
import type { FormInstance } from 'antd';
import type { Setter } from '../../setter';

export type EventsMobileVerificationCodeSendButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsMobileVerificationCodeSendButton = (
  setter: Setter,
  dispatch: Dispatch,
  graphicalVerificationCode: string | undefined,
  registrationMobileVerificationForm: FormInstance<any>,
): EventsMobileVerificationCodeSendButton => {
  return {
    onClick: (event) => onSendMobileVerificationCode(event, setter, dispatch, graphicalVerificationCode, registrationMobileVerificationForm),
  };
};
