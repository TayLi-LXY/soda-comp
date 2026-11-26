import { onClickExpandSidebar } from './onClickExpandSidebar';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsLeftComponentDiv0Div0Div1 = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsLeftComponentDiv0Div0Div1 = (
  setter: Setter,
  dispatch: Dispatch,
): EventsLeftComponentDiv0Div0Div1 => {
  return {
    onClick: (event) => onClickExpandSidebar(event, setter, dispatch),
  };
};
