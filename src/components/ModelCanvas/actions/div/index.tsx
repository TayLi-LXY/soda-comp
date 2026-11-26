import { onModelChange } from './onModelChange';
import { ViewState } from '@horsecoder/visual-core';

export type EventsDiv = {
  onChange: (
    viewState: ViewState,
  ) => void;
};

export const eventsDiv = (
): EventsDiv => {
  return {
    onChange: (viewState) => onModelChange(viewState),
  };
};
