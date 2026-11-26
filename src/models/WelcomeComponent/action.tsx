import type { ComponentState } from './types';

export const refreshWelcomeComponentComponentState = (state: ComponentState) => ({
  type: 'WelcomeComponent/refreshComponentState',
  payload: { ...state },
});
