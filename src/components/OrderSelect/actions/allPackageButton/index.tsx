import { onClickOnAllPackageButton } from './onClickOnAllPackageButton';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsAllPackageButton = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsAllPackageButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsAllPackageButton => {
  return {
    onClick: (event) => onClickOnAllPackageButton(event, setter, dispatch),
  };
};
