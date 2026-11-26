import type { ComponentState } from './types';

export const refreshCodeComponentComponentState = (state: ComponentState) => ({
  type: 'CodeComponent/refreshComponentState',
  payload: { ...state },
});
