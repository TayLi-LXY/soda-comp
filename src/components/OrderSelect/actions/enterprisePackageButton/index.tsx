import { onClickDisplayEnterprisePackage } from './onClickDisplayEnterprisePackage';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsEnterprisePackageButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsEnterprisePackageButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsEnterprisePackageButton => {
  return {
    onClick: (event) => onClickDisplayEnterprisePackage(event, setter, dispatch),
  };
};
