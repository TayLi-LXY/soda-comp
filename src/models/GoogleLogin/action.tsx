import type { ComponentState } from './types';

export const refreshGoogleLoginComponentState = (state: ComponentState) => ({
  type: 'GoogleLogin/refreshComponentState',
  payload: { ...state },
});
