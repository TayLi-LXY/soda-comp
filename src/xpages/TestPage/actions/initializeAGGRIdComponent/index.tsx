import { onMonitorLineClickCallback } from './onMonitorLineClickCallback';
import { onMonitorSelectedChangesAndCallback } from './onMonitorSelectedChangesAndCallback';
import { onListeningTableReadyCallback } from './onListeningTableReadyCallback';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsInitializeAGGRIdComponent = {
  onRowClicked: (
    event: any,
  ) => void;
  onSelectionChanged: (
    event: any,
  ) => void;
  onGridReady: (
    event: any,
  ) => void;
};

export const eventsInitializeAGGRIdComponent = (
  setter: Setter,
  dispatch: Dispatch,
): EventsInitializeAGGRIdComponent => {
  return {
    onRowClicked: (event) => onMonitorLineClickCallback(event, setter, dispatch),
    onSelectionChanged: (event) => onMonitorSelectedChangesAndCallback(event, setter, dispatch),
    onGridReady: (event) => onListeningTableReadyCallback(event, setter, dispatch),
  };
};
