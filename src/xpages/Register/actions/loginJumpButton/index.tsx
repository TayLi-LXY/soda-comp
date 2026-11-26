import { onClickJumpLoginPage } from './onClickJumpLoginPage';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsLoginJumpButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsLoginJumpButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsLoginJumpButton => {
  return {
    onClick: (event) => onClickJumpLoginPage(event, setter, dispatch),
  };
};
