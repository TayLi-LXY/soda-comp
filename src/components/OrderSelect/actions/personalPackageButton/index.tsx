import { onClickDisplayPersonalPackage } from './onClickDisplayPersonalPackage';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsPersonalPackageButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsPersonalPackageButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsPersonalPackageButton => {
  return {
    onClick: (event) => onClickDisplayPersonalPackage(event, setter, dispatch),
  };
};
