import { onObtainSMSVerificationCode } from './onObtainSMSVerificationCode';
import type { Dispatch } from 'redux';
import type { FormInstance } from 'antd';
import type { Setter } from '../../setter';

export type EventsGetSMSButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsGetSMSButton = (
  setter: Setter,
  dispatch: Dispatch,
  verificationCodeLoginForm: FormInstance<any>,
): EventsGetSMSButton => {
  return {
    onClick: (event) => onObtainSMSVerificationCode(event, setter, dispatch, verificationCodeLoginForm),
  };
};
