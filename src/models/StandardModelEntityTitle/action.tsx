import type { ComponentState } from './types';

export const refreshStandardModelEntityTitleComponentState = (state: ComponentState) => ({
  type: 'StandardModelEntityTitle/refreshComponentState',
  payload: { ...state },
});
