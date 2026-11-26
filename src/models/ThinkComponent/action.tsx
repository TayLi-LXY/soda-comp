import type { ComponentState } from './types';

export const refreshThinkComponentComponentState = (state: ComponentState) => ({
  type: 'ThinkComponent/refreshComponentState',
  payload: { ...state },
});
