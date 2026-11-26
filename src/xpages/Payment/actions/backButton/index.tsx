import { onClickReturn } from './onClickReturn';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsBackButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsBackButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsBackButton => {
  return {
    onClick: (event) => onClickReturn(event, setter, dispatch),
  };
};
