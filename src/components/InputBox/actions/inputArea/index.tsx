import { onChangeInInputAreaContent } from './onChangeInInputAreaContent';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsInputArea = {
  onChange: (
    event: any,
  ) => Promise<void>;
};

export const eventsInputArea = (
  setter: Setter,
  dispatch: Dispatch,
): EventsInputArea => {
  return {
    onChange: (event) => onChangeInInputAreaContent(event, setter, dispatch),
  };
};
