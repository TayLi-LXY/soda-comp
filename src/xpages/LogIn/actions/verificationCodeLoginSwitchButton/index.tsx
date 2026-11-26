import { onClickOpenVerificationCodeAndLogIn } from './onClickOpenVerificationCodeAndLogIn';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsVerificationCodeLoginSwitchButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsVerificationCodeLoginSwitchButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsVerificationCodeLoginSwitchButton => {
  return {
    onClick: (event) => onClickOpenVerificationCodeAndLogIn(event, setter, dispatch),
  };
};
