import { onClickOpenSettingsPanel } from './onClickOpenSettingsPanel';
import React from 'react';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsUserInformationContainer = {
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => Promise<void>;
};

export const eventsUserInformationContainer = (
  setter: Setter,
  dispatch: Dispatch,
  setPanelVisibleControls: boolean,
): EventsUserInformationContainer => {
  return {
    onClick: (event) => onClickOpenSettingsPanel(event, setter, dispatch, setPanelVisibleControls),
  };
};
