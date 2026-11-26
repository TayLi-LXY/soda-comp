import { onClickOpenAndCloseChart } from './onClickOpenAndCloseChart';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsChartSwitchButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsChartSwitchButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsChartSwitchButton => {
  return {
    onClick: (event) => onClickOpenAndCloseChart(event, setter, dispatch),
  };
};
