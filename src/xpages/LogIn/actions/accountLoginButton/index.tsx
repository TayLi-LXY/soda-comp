import { onClickDisplayAccountLogin } from './onClickDisplayAccountLogin';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsAccountLoginButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsAccountLoginButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsAccountLoginButton => {
  return {
    onClick: (event) => onClickDisplayAccountLogin(event, setter, dispatch),
  };
};
