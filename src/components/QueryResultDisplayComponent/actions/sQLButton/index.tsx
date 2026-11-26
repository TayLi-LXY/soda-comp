import { onClickOpenAndCloseSQLComponent } from './onClickOpenAndCloseSQLComponent';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsSQLButton = {
  onClick: (
    event: any,
  ) => Promise<void>;
};

export const eventsSQLButton = (
  setter: Setter,
  dispatch: Dispatch,
): EventsSQLButton => {
  return {
    onClick: (event) => onClickOpenAndCloseSQLComponent(event, setter, dispatch),
  };
};
