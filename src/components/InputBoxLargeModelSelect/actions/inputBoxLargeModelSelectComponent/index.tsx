import { onSelectLargeModel } from './onSelectLargeModel';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsInputBoxLargeModelSelectComponent = {
  onChange: (
    value: any,
  ) => Promise<void>;
};

export const eventsInputBoxLargeModelSelectComponent = (
  setter: Setter,
  dispatch: Dispatch,
  largeModelSelectCallback: ((model: string) => void) | undefined,
): EventsInputBoxLargeModelSelectComponent => {
  return {
    onChange: (value) => onSelectLargeModel(value, setter, dispatch, largeModelSelectCallback),
  };
};
