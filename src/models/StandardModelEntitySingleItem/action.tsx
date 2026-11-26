import type { ComponentState } from './types';

export const refreshStandardModelEntitySingleItemComponentState = (state: ComponentState) => ({
  type: 'StandardModelEntitySingleItem/refreshComponentState',
  payload: { ...state },
});
