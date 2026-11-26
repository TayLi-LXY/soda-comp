import type { ComponentState } from './types';

export const refreshStandardModelEntityComponentState = (state: ComponentState) => ({
  type: 'StandardModelEntity/refreshComponentState',
  payload: { ...state },
});
