import type { ComponentState } from './types';

export const refreshDataSchemaSingleItemComponentState = (state: ComponentState) => ({
  type: 'DataSchemaSingleItem/refreshComponentState',
  payload: { ...state },
});
