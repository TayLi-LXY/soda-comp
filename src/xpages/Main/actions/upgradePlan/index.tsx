import { onUpgradePlanCancel } from './onUpgradePlanCancel';
import type { Dispatch } from 'redux';

export type EventsUpgradePlan = {
  onCancel: (
    event: any,
  ) => Promise<void>;
};

export const eventsUpgradePlan = (
  dispatch: Dispatch,
): EventsUpgradePlan => {
  return {
    onCancel: (event) => onUpgradePlanCancel(event, dispatch),
  };
};
