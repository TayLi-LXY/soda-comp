import { onClickSwitchDataButton } from './onClickSwitchDataButton';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsDataButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsDataButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsDataButton => {
  return {
    onClick: (event) => onClickSwitchDataButton(event, setter, dispatch),
  };
};
