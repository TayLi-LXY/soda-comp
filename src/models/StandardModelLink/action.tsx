import type { ComponentState } from './types';

export const refreshStandardModelLinkComponentState = (state: ComponentState) => ({
  type: 'StandardModelLink/refreshComponentState',
  payload: { ...state },
});
