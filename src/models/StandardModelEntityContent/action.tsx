import type { ComponentState } from './types';

export const refreshStandardModelEntityContentComponentState = (state: ComponentState) => ({
  type: 'StandardModelEntityContent/refreshComponentState',
  payload: { ...state },
});
