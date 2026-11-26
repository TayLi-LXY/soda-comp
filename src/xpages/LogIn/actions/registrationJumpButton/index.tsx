import { onClickJumpRegistrationPage } from './onClickJumpRegistrationPage';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsRegistrationJumpButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsRegistrationJumpButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsRegistrationJumpButton => {
  return {
    onClick: (event) => onClickJumpRegistrationPage(event, setter, dispatch),
  };
};
